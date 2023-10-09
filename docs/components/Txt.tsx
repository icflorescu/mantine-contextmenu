import { Alert, Text } from '@mantine/core';
import { IconAlertCircle, IconInfoCircle } from '@tabler/icons-react';

export type TxtProps = React.PropsWithChildren<
  | {
      info?: true;
      warning?: never;
    }
  | {
      info?: never;
      warning?: true;
    }
>;

export function Txt({ info, warning, children }: TxtProps) {
  return info || warning ? (
    <Alert
      my="xl"
      color={warning ? 'red' : undefined}
      styles={{ message: { lineHeight: 1.6 } }}
      icon={info ? <IconInfoCircle /> : <IconAlertCircle />}
    >
      {children}
    </Alert>
  ) : (
    <Text my="md">{children}</Text>
  );
}
