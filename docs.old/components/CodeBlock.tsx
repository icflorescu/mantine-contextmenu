import { CodeHighlight } from '@mantine/code-highlight';
import { Box, Text, rgba, useMantineTheme } from '@mantine/core';
import classes from './CodeBlock.module.css';

type ColdeBlockProps = { fileName?: string; content: string; noCopy?: boolean; language?: string };

export default function CodeBlock({ content, noCopy, fileName, language = 'tsx' }: ColdeBlockProps) {
  const { colors } = useMantineTheme();
  return (
    <Box my="xl">
      {fileName && (
        <Text
          style={{
            '--component-text-bg-color-light': rgba(colors.gray[0], 0.65),
            '--component-text-bg-color-dark': colors.dark[8],
          }}
          className={classes.text}
        >
          {fileName}
        </Text>
      )}
      <CodeHighlight language={language} code={content} withCopyButton={!noCopy}>
        {content}
      </CodeHighlight>
    </Box>
  );
}
