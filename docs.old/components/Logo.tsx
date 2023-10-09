import { Code, Text, ThemeIcon } from '@mantine/core';
import { IconPointer } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import classes from './Logo.module.css';

export default function Logo({ className, insideHeader }: { className?: string; insideHeader?: boolean }) {
  return (
    <Link className={clsx(classes.root, className)} href="/">
      <ThemeIcon className={clsx({ [classes.iconInsideHeader]: insideHeader })} size="md" radius="lg">
        <IconPointer size={16} />
      </ThemeIcon>
      <Text className={clsx(classes.title, { [classes.titleInsideHeader]: insideHeader })} component="h1">
        Mantine ContextMenu
      </Text>
      <Code className={clsx(classes.version, { [classes.versionInsideHeader]: insideHeader })}>
        {process.env.PACKAGE_VERSION}
      </Code>
    </Link>
  );
}
