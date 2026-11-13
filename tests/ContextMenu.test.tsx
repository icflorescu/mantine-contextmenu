import { describe, expect, test, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import type { ContextMenuItemOptions } from '../package/index';
import { renderContextMenu } from './utils';

function createItems() {
  const onCopy = vi.fn();
  const onProfile = vi.fn();
  const items: ContextMenuItemOptions[] = [
    { key: 'copy', onClick: onCopy },
    { key: 'download', onClick: () => undefined },
    { key: 'divider' },
    { key: 'disabled-item', disabled: true, onClick: () => undefined },
    {
      key: 'author',
      items: [
        { key: 'profile', onClick: onProfile },
        { key: 'website', onClick: () => undefined },
      ],
    },
    { key: 'hidden-item', hidden: true, onClick: () => undefined },
    { key: 'last', onClick: () => undefined },
  ];
  return { items, onCopy, onProfile };
}

const trigger = () => page.getByTestId('trigger');
const menus = () => page.getByRole('menu');
const item = (name: string | RegExp) => page.getByRole('menuitem', { name });

async function rightClickTrigger(position = { x: 20, y: 30 }) {
  await trigger().click({ button: 'right', position });
  await expect.element(menus()).toBeVisible();
}

async function openWithKeyboard() {
  trigger().element().focus();
  await userEvent.keyboard('{Shift>}{F10}{/Shift}');
  await expect.element(menus()).toBeVisible();
}

const rect = (locator: ReturnType<typeof menus>) => (locator.element() as HTMLElement).getBoundingClientRect();

describe('with the mouse', () => {
  test('shows the menu at the pointer position', async () => {
    await renderContextMenu(createItems().items);
    await rightClickTrigger({ x: 20, y: 30 });
    const { left, top } = rect(menus());
    expect(left).toBeCloseTo(50 + 20, 0);
    expect(top).toBeCloseTo(50 + 30, 0);
  });

  test('keeps the menu inside the window near its edges', async () => {
    await renderContextMenu(createItems().items, { triggerStyle: { top: 'auto', left: 'auto', right: 0, bottom: 0 } });
    await rightClickTrigger({ x: 295, y: 195 });
    const { right, bottom } = rect(menus());
    expect(right).toBeLessThanOrEqual(window.innerWidth);
    expect(bottom).toBeLessThanOrEqual(window.innerHeight);
  });

  test('renders items, dividers, disabled and hidden items', async () => {
    await renderContextMenu(createItems().items);
    await rightClickTrigger();
    expect(
      page
        .getByRole('menuitem')
        .all()
        .map((i) => i.element().textContent)
    ).toEqual(['Copy', 'Download', 'Disabled item', 'Author›', 'Last']);
    await expect.element(item('Disabled item')).toBeDisabled();
    await expect.element(page.getByRole('separator')).toBeInTheDocument();
  });

  test('focuses the menu itself, so it can be navigated with the keyboard', async () => {
    await renderContextMenu(createItems().items);
    await rightClickTrigger();
    await expect.element(menus()).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect.element(item('Copy')).toHaveFocus();
  });

  test('clicking an item calls its handler and hides the menu', async () => {
    const { items, onCopy } = createItems();
    await renderContextMenu(items);
    await rightClickTrigger();
    await item('Copy').click();
    expect(onCopy).toHaveBeenCalledOnce();
    await expect.element(menus()).not.toBeInTheDocument();
  });

  test('clicking outside hides the menu', async () => {
    await renderContextMenu(createItems().items);
    await rightClickTrigger();
    await page.getByRole('button', { name: 'Outside' }).click({ force: true });
    await expect.element(menus()).not.toBeInTheDocument();
  });

  test('scrolling and resizing hide the menu', async () => {
    await renderContextMenu(createItems().items);
    for (const type of ['scroll', 'resize']) {
      await rightClickTrigger();
      window.dispatchEvent(new Event(type));
      await expect.element(menus()).not.toBeInTheDocument();
    }
  });

  test('repeating the right-click hides the menu', async () => {
    await renderContextMenu(createItems().items);
    await rightClickTrigger({ x: 20, y: 30 });
    await trigger().click({ button: 'right', position: { x: 200, y: 150 }, force: true });
    await expect.element(menus()).not.toBeInTheDocument();
  });

  test('repositions the menu on repeated right-click with `repositionOnRepeat`', async () => {
    await renderContextMenu(createItems().items, { repositionOnRepeat: true });
    await rightClickTrigger({ x: 20, y: 30 });
    await trigger().click({ button: 'right', position: { x: 250, y: 150 }, force: true });
    await expect.poll(() => rect(menus()).left).toBeCloseTo(50 + 250, 0);
  });

  test('hovering an item with a submenu opens it after `submenuDelay`, without stealing focus', async () => {
    await renderContextMenu(createItems().items, { submenuDelay: 50 });
    await rightClickTrigger();
    await item(/Author/).hover();
    await expect.element(menus().nth(1)).toBeVisible();
    await expect.element(item('Profile')).toBeVisible();
    await expect.element(menus().first()).toHaveFocus();
    await page.getByRole('menuitem', { name: 'Copy' }).hover();
    await expect.poll(() => menus().all().length).toBe(1);
  });
});

describe('with the keyboard', () => {
  test('Shift+F10 opens the menu with its first item focused', async () => {
    await renderContextMenu(createItems().items);
    await openWithKeyboard();
    await expect.element(item('Copy')).toHaveFocus();
  });

  test('arrow keys, Home and End move through enabled items, wrapping around', async () => {
    await renderContextMenu(createItems().items);
    await openWithKeyboard();
    const expectFocus = async (key: string, name: string | RegExp) => {
      await userEvent.keyboard(key);
      await expect.element(item(name)).toHaveFocus();
    };
    await expectFocus('{ArrowDown}', 'Download');
    await expectFocus('{ArrowDown}', /Author/); // skips the divider and the disabled item
    await expectFocus('{ArrowDown}', 'Last'); // skips the hidden item
    await expectFocus('{ArrowDown}', 'Copy'); // wraps
    await expectFocus('{ArrowUp}', 'Last'); // wraps backwards
    await expectFocus('{Home}', 'Copy');
    await expectFocus('{End}', 'Last');
  });

  test('Tab keeps the focus inside the menu', async () => {
    await renderContextMenu(createItems().items);
    await openWithKeyboard();
    await userEvent.keyboard('{Tab}');
    await expect.element(item('Copy')).toHaveFocus();
  });

  test('ArrowRight opens a submenu and ArrowLeft closes it', async () => {
    await renderContextMenu(createItems().items);
    await openWithKeyboard();
    await userEvent.keyboard('{End}{ArrowUp}');
    await expect.element(item(/Author/)).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard('{ArrowRight}');
    await expect.element(item('Profile')).toHaveFocus();
    await expect.element(item(/Author/)).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{ArrowDown}');
    await expect.element(item('Website')).toHaveFocus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect.element(item(/Author/)).toHaveFocus();
    expect(menus().all()).toHaveLength(1);
  });

  test('Enter opens a submenu, Escape closes only the submenu', async () => {
    await renderContextMenu(createItems().items);
    await openWithKeyboard();
    await userEvent.keyboard('{End}{ArrowUp}{Enter}');
    await expect.element(item('Profile')).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await expect.element(item(/Author/)).toHaveFocus();
    expect(menus().all()).toHaveLength(1);
  });

  test('Enter activates an item in a submenu, hides the menu and restores the focus', async () => {
    const { items, onProfile } = createItems();
    await renderContextMenu(items);
    await openWithKeyboard();
    await userEvent.keyboard('{End}{ArrowUp}{ArrowRight}');
    await expect.element(item('Profile')).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(onProfile).toHaveBeenCalledOnce();
    await expect.element(menus()).not.toBeInTheDocument();
    await expect.element(trigger()).toHaveFocus();
  });

  test('Escape hides the menu and restores the focus to the trigger', async () => {
    await renderContextMenu(createItems().items);
    await openWithKeyboard();
    await userEvent.keyboard('{Escape}');
    await expect.element(menus()).not.toBeInTheDocument();
    await expect.element(trigger()).toHaveFocus();
  });

  test('submenu keys are reversed in RTL', async () => {
    await renderContextMenu(createItems().items, { dir: 'rtl' });
    await openWithKeyboard();
    await userEvent.keyboard('{End}{ArrowUp}{ArrowRight}');
    expect(menus().all()).toHaveLength(1);
    await userEvent.keyboard('{ArrowLeft}');
    await expect.element(item('Profile')).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await expect.element(item(/Author/)).toHaveFocus();
    expect(menus().all()).toHaveLength(1);
  });

  test('leaves keyboard handling alone for custom content', async () => {
    await renderContextMenu(() => <input aria-label="Custom input" defaultValue="abc" />);
    const input = page.getByLabelText('Custom input');
    trigger().element().focus();
    await userEvent.keyboard('{Shift>}{F10}{/Shift}');
    await expect.element(input).toBeVisible();
    await expect.element(page.getByRole('menu')).not.toBeInTheDocument(); // no `menu` role for custom content
    await input.click();
    await userEvent.keyboard('{ArrowDown}{Home}');
    await expect.element(input).toHaveFocus();
  });
});

function CustomContent() {
  return (
    <div style={{ padding: 16 }}>
      <input aria-label="Name" />
      <label>
        <input type="checkbox" /> Enabled
      </label>
    </div>
  );
}

describe('with custom content', () => {
  const overlay = () => document.querySelector('.mantine-contextmenu-overlay') as HTMLElement;

  test('interacting with the content keeps the menu open', async () => {
    await renderContextMenu(() => <CustomContent />);
    await trigger().click({ button: 'right' });
    const name = page.getByLabelText('Name');
    const checkbox = page.getByRole('checkbox', { name: 'Enabled' });
    await name.click();
    await userEvent.keyboard('Alice');
    await checkbox.click();
    await expect.element(name).toHaveValue('Alice');
    await expect.element(checkbox).toBeChecked();
  });

  test('pressing inside the menu and releasing outside keeps the menu open', async () => {
    await renderContextMenu(() => <CustomContent />);
    await trigger().click({ button: 'right' });
    const name = page.getByLabelText('Name');
    await expect.element(name).toBeVisible();
    // A drag that starts inside the menu and ends outside of it dispatches the click on the overlay
    name.element().dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    overlay().dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await expect.element(name).toBeVisible();
  });

  test('clicking outside hides the menu', async () => {
    await renderContextMenu(() => <CustomContent />);
    await trigger().click({ button: 'right' });
    await expect.element(page.getByLabelText('Name')).toBeVisible();
    await page.getByRole('button', { name: 'Outside' }).click({ force: true });
    await expect.element(page.getByLabelText('Name')).not.toBeInTheDocument();
  });
});
