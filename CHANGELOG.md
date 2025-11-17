# Changelog

The following is a list of notable changes to the Mantine ContextMenu component.  
Minor versions that are not listed in the changelog are minor bug fixes and small internal improvements or refactorings.

## 8.3.8 (2025-11-17)

- Update dev dependencies to ensure compatibility with Mantine 8.3.8

## 8.3.7 (2025-11-10)

- Update dev dependencies to ensure compatibility with Mantine 8.3.7
- Fix linting & linting errors

## 8.3.6 (2025-11-07)

- Update dev dependencies to ensure compatibility with Mantine 8.3.6

## 8.2.0 (2025-07-23)

- Update dev dependencies to ensure compatibility with Mantine 8.2

## 8.1.3 (2025-07-21)

- Update dev dependencies to ensure compatibility with Mantine 8.1.3 & Next.js 15.4.x

## 8.1.2 (2025-06-16)

- Update dependencies to ensure compatibility with Mantine 8.1.1

## 8.1.1 (2025-06-11)

- Fix issue [#183](https://github.com/icflorescu/mantine-contextmenu/issues/183) - classes and styles provided to `showContextMenu` are now properly applied to submenus
- Change submenu caret to `>`
- Minor docs website improvements

## 8.1.0 (2025-06-10)

- Update to Mantine v8.1
- Update eslint to ^9
- Update dev dependencies, including Next.js to 15.3.3

## 7.17.1 (2025-03-06)

- Implement `repositionOnRepeat` option
- Update dev dependencies to ensure compatibility with Mantine 7.17.1 & Next.js 15.2

## 7.15.3 (2025-01-09)

- Update dev dependencies to ensure compatibility with Mantine 7.15.3.
- Remove unnecessary menu overlay CSS background-color property

## 7.15.1 (2024-12-20)

- Update dev dependencies to ensure compatibility with Mantine 7.15.1 and Next.js 15 GA.

## 7.14.2 (2024-10-26)

- Update dev dependencies to ensure compatibility with Mantine 7.14.2 and Next.js 15
- Minor docs app updates to ensure compatibility with Next.js 15
- Update build workflow Node.js version

## 7.12.2 (2024-09-04)

- Update dev dependencies to ensure compatibility with Mantine 7.12.2

## 7.11.3 (2024-07-30)

- Update dev dependencies

## 7.11.2 (2024-07-10)

- Update dev dependencies
- Emphasize that PRs should target the `next` branch in the README

## 7.11.1 (2024-07-08)

- Update dev dependencies to ensure compatibility with Mantine 7.11.1

## 7.11.0 (2024-06-29)

- Update dev dependencies to ensure compatibility with Mantine 7.11.0

## 7.10.2 (2024-06-15)

- Update dev dependencies to ensure compatibility with Mantine 7.10.2 and Next.js 14.2.4

## 7.10.1 (2024-06-03)

- Update dev dependencies to ensure compatibility with Mantine 7.10.1

## 7.9.1 (2024-05-09)

- Update dev dependencies to ensure compatibility with Mantine 7.9.1
- Fix iOS touch events

## 7.9.0 (2024-05-03)

- Update dev dependencies to ensure compatibility with Mantine 7.9

## 7.8.1 (2024-04-25)

- Update dev dependencies to ensure compatibility with Mantine 7.8.1, Next.js 14.2.3 & React 18.3

## 7.8.0 (2024-04-12)

- Update dev dependencies to ensure compatibility with Mantine 7.8.x & Next.js 14.2

## 7.7.0 (2024-04-04)

- Implement iOS touch events (thanks to [Juno Nguyen](https://github.com/JunoNgx), see [#152](https://github.com/icflorescu/mantine-contextmenu/pull/152))
- Update dev dependencies to ensure compatibility with Mantine 7.7.x

## 7.6.2 (2024-03-05)

- Update dev dependencies to ensure compatibility with Mantine 7.6.1

## 7.6.1 (2024-02-28)

- Implement `iconRight` property (see [#147](https://github.com/icflorescu/mantine-contextmenu/pull/147) by [@JTson8](https://github.com/JTson8))

## 7.6.0 (2024-02-28)

- Update dev dependencies to ensure compatibility with Mantine 7.6.0

## 7.5.0 (2024-01-27)

- Update dev dependencies to ensure compatibility with Mantine 7.5.0

## 7.4.1 (2024-01-20)

- Update dev dependencies to ensure compatibility with Mantine 7.4.2 and Next.js 14.1
- Switch to Next `turbo` in development mode

## 7.4.0 (2024-01-04)

- Ensure compatibility with Mantine 7.4
- Minor docs improvements

## 7.3.3 (2023-12-21)

- Minor docs improvements

## 7.3.2 (2023-12-08)

- Improve submenu showing logic

## 7.3.1 (2023-12-07)

- Fix a bug that prevented the submenus from being opened on mobile devices (see [#129](https://github.com/icflorescu/mantine-contextmenu/issues/129))

## 7.3.0 (2023-12-07)

- Update deps to ensure compatibility with Mantine 7.3
- Update fine-grained styling example to ensure compatibility with Mantine 7.3

## 7.1.9 (2023-11-06)

- Switch to `tsup` building, to fix usage issues with Remix & Next.js
- Switch to using an overlay instead of `useClickOutside` hook, to fix [this issue](https://github.com/icflorescu/mantine-contextmenu/issues/120)

## 7.1.8 (2023-11-03)

- Fix package exports

## 7.1.7 (2023-11-03)

- Switch to `esm` export only, to fix this issue: https://github.com/icflorescu/mantine-datatable/issues/451  
  This is a potentially breaking change and I'm sorry to do it in a patch release, but the library needs to work with Next.js pages router

## 7.1.3 (2023-10-27)

- Add `hidden` prop to menu items, to allow conditional hiding

## 7.1.0 (2023-10-24)

- The first stable release of the V7.1 is here! 🎉
- The object returned by the `useContextMenu` hook now includes an `isContextMenuVisible` boolean property

## 7.0.0-alpha.6 (2023-10-19)

- **BREAKING CHANGE**: Change the types of `style` and `styles` properties to `MantineStyleProp` and `StylesRecord<'root' | 'item' | 'divider', MantineStyleProp>` respectively, to match Mantine's approach to styling
- **BREAKING CHANGE**: the `useContextMenu` hook now returns an object with `showContextMenu` and `hideContextMenu` functions instead of a function

## 7.0.0-alpha.4 (2023-10-19)

- Remove `borderRadius` and `shadow` from the options provided to `showContextMenu`, as customizing them through the `<ContextMenuProvider>` props should be enough
- Add a `submenuDelay` prop to the `<ContextMenuProvider>` component, to control the delay before a submenu is shown when hovering over a menu item that has a submenu
- Substantial improvements to the documentation website

## 7.0.0-alpha.1 (2023-10-16)

- The V7 alpha release is here! 🎉
- The V7 is a major rewrite of the library internals, with the following goals in mind:
  - **Mantine V7 compatibility** - switch the styling approach from CSS-in-JS to PostCSS (or PostCSS modules)
  - Make the repo easier to maintain by switching from a monorepo approach to a single-package that includes the source code, documentation and examples; this should also make it easier for new contributors to get started
  - Streamline the build process - switch from `esbuild` to plain `tsc` and `postcss` commands
  - Rewrite the entire documentation website to make use of Next.js app router and React Server Components; this should also ensure the package will work properly in such an environment

## 6.1.0 (2023-11-10)

- Allow imperative hiding by using the `hideContextMenu` function that is exposed via `useContextMenu()`;
- `useContextMenu()` is now also an object that can be destructured into 3 properties: `showContextMenu`, `hideContextMenu`, and `isContextMenuVisible `.

## 6.0.0 (2023-10-01)

- Bump version to `6.0.0` to match the compatible versions of `@mantine/hooks` and `@mantine/core`. From now on, we'll make sure to keep the major version of `mantine-contextmenu` in sync with the major version of Mantine core
- Implement submenus (nested context menus) support (see [#68](https://github.com/icflorescu/mantine-contextmenu/issues/68)), many thanks to @Corvimia for her contribution 🙏 (see [#69](https://github.com/icflorescu/mantine-contextmenu/pull/69))

## 1.3.14 (2023-08-11)

- Switch to `useResizeObserver` instead of `useElementSize` to properly take into account the padding and border when calculating the menu position

## 1.3.13 (2023-08-10)

- Lock `@mantine/core` and `@mantine/hooks` peer dependencies to `>=6 <=6.0.17 || >=6.0.19`, to avoid a [bug introduced in `6.0.18` and fixed in `6.0.19`](https://github.com/mantinedev/mantine/pull/4512)

## 1.3.3 (2023-06-30)

- Fix positioning regression introduced by using a Portal

## 1.3.2 (2023-06-29)

- Use a Portal to render the context menu

## 1.3.1 (2023-06-28)

- Relax peer dependencies (to Mantine 6.x)

## 1.3.0 (2023-06-23)

- Expose `ContextMenu`, `ContextMenuItem` and `ContextMenuDivider` components

## 1.2.3 (2023-04-29)

- Stop event propagation (fix issue #18)

## 1.1.0 (2023-04-11)

- Add custom content support

## 1.0.0 (2023-04-11)

- Initial release
