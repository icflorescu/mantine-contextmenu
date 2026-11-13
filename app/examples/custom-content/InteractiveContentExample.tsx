'use client';

import { useContextMenu } from '__PACKAGE__';
import { Button, Group, Slider, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { Picture } from '~/components/Picture';
import { unsplashImages } from '~/lib/images';

type Adjustments = { brightness: number; contrast: number; saturation: number };

const DEFAULT_ADJUSTMENTS: Adjustments = { brightness: 100, contrast: 100, saturation: 100 };

type AdjustmentsMenuProps = {
  initialValue: Adjustments;
  onChange: (value: Adjustments) => void;
  close: () => void;
};

// The menu content is rendered from the callback passed to `showContextMenu` when the menu is shown,
// so interactive controls should keep their own state in a component like this one
function AdjustmentsMenu({ initialValue, onChange, close }: AdjustmentsMenuProps) {
  const [value, setValue] = useState(initialValue);

  const update = (changes: Partial<Adjustments>) => {
    const newValue = { ...value, ...changes };
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Stack w={240} p="sm" gap="xs">
      {(Object.keys(DEFAULT_ADJUSTMENTS) as (keyof Adjustments)[]).map((key) => (
        <div key={key}>
          <Text size="xs" tt="capitalize">
            {key}
          </Text>
          <Slider
            size="sm"
            min={0}
            max={200}
            label={(v) => `${v}%`}
            value={value[key]}
            onChange={(v) => update({ [key]: v })}
            thumbLabel={key}
          />
        </div>
      ))}
      <Group justify="space-between" mt="xs">
        <Button size="compact-xs" variant="default" onClick={() => update(DEFAULT_ADJUSTMENTS)}>
          Reset
        </Button>
        <Button size="compact-xs" onClick={close}>
          Done
        </Button>
      </Group>
    </Stack>
  );
}

export function InteractiveContentExample() {
  const { showContextMenu } = useContextMenu();
  const [adjustments, setAdjustments] = useState(DEFAULT_ADJUSTMENTS);
  const { brightness, contrast, saturation } = adjustments;

  return (
    <Picture
      image={unsplashImages[4]}
      filter={`brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`}
      onContextMenu={showContextMenu((close) => (
        <AdjustmentsMenu initialValue={adjustments} onChange={setAdjustments} close={close} />
      ))}
    />
  );
}
