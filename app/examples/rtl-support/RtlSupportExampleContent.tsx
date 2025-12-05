'use client';

import {
  IconClipboard,
  IconCopy,
  IconCut,
  IconDownload,
  IconEdit,
  IconFileExport,
  IconShare,
  IconTrash,
} from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { unsplashImages } from '~/lib/images';

export function RtlSupportExampleContent() {
  const { showContextMenu } = useContextMenu();
  const image = unsplashImages[0];

  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'edit',
          icon: <IconEdit size={16} />,
          title: 'Edit',
          onClick: () => {},
        },
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          title: 'Copy',
          onClick: () => {},
        },
        {
          key: 'cut',
          icon: <IconCut size={16} />,
          title: 'Cut',
          onClick: () => {},
        },
        {
          key: 'paste',
          icon: <IconClipboard size={16} />,
          title: 'Paste',
          onClick: () => {},
        },
        { key: 'divider-1' },
        {
          key: 'share',
          icon: <IconShare size={16} />,
          title: 'Share',
          items: [
            {
              key: 'share-email',
              title: 'Email',
              onClick: () => {},
            },
            {
              key: 'share-social',
              title: 'Social Media',
              items: [
                { key: 'facebook', title: 'Facebook', onClick: () => {} },
                { key: 'twitter', title: 'Twitter', onClick: () => {} },
                { key: 'linkedin', title: 'LinkedIn', onClick: () => {} },
              ],
            },
            {
              key: 'share-link',
              title: 'Copy Link',
              iconRight: <IconCopy size={16} />,
              onClick: () => {},
            },
          ],
        },
        {
          key: 'export',
          icon: <IconFileExport size={16} />,
          title: 'Export',
          items: [
            { key: 'export-pdf', title: 'Export as PDF', onClick: () => {} },
            { key: 'export-png', title: 'Export as PNG', onClick: () => {} },
            { key: 'export-svg', title: 'Export as SVG', onClick: () => {} },
          ],
        },
        { key: 'divider-2' },
        {
          key: 'download',
          icon: <IconDownload size={16} />,
          title: 'Download',
          onClick: () => {},
        },
        {
          key: 'delete',
          icon: <IconTrash size={16} />,
          title: 'Delete',
          color: 'red',
          onClick: () => {},
        },
      ])}
    />
  );
}
