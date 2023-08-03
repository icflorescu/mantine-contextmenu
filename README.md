# Mantine ContextMenu

![Publish NPM & deploy docs workflow](https://github.com/icflorescu/mantine-contextmenu/actions/workflows/publish-and-deploy.yml/badge.svg)  
[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Stars][stars-image]][stars-url]
[![Last commit][last-commit-image]][repo-url]
[![Closed issues][closed-issues-image]][closed-issues-url]
[![Downloads][downloads-image]][npm-url]
[![Language][language-image]][repo-url]
[![Sponsor the author][sponsor-image]][sponsor-url]

The "dark-theme aware" **context-menu** for your Mantine UI applications, built by the creator of [Mantine DataTable](https://icflorescu.github.io/mantine-datatable/).

[![Mantine ContextMenu](https://user-images.githubusercontent.com/581999/231230506-3278ea99-dfb3-4edc-ad67-d47f1626a298.png)](https://icflorescu.github.io/mantine-contextmenu/)

## Features

- **Lightweight** - no expternal dependencies, [no bloat](https://bundlephobia.com/package/mantine-contextmenu)
- **Dark-theme aware** - automatically adapts to the current Mantine theme
- **[Simple API](https://icflorescu.github.io/mantine-contextmenu/getting-started)** - just wrap your application in the `ContextMenuProvider` component and use the hook-generated function in your code
- **[Custom content support](https://icflorescu.github.io/mantine-contextmenu/examples/custom-content)** - use any Mantine component as context menu content
- **[Highly customizable styling](https://icflorescu.github.io/mantine-contextmenu/examples/styling)** - use the `className`/`classNames`, `style`/`styles` and `sx` props to customize the context menu appearance
- **[Written in Typescript and well-documented](https://icflorescu.github.io/mantine-contextmenu/type-definitions)** - with detailed JSDoc annotations for each exported function and component

## Full documentation and examples

Visit [icflorescu.github.io/mantine-contextmenu](https://icflorescu.github.io/mantine-contextmenu/) to view the full documentation and learn how to use it by browsing the list of usage examples.

## Quickstart

Install the package and its dependencies:

```sh
npm i @mantine/core @mantine/hooks @emotion/react mantine-contextmenu
```

If you're using Next.js, Vite, CRA, Remix or Gatsby, you might need to install additional dependencies. Please refer to Mantine's [getting started page](https://mantine.dev/pages/getting-started/) for more details.

Wrap your application in the `ContextMenuProvider` components:

```tsx
import { MantineProvider } from '@mantine/core';
import { ContextMenuProvider } from 'mantine-contextmenu';

function App() {
  return (
    <MantineProvider>
      <ContextMenuProvider>
        {/* your app code here... */}
      </ContextMenuProvider>
    </MantineProvider>
  );
}
```

Use the hook-generated function in your code:

```tsx
import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

export default function GettingStartedExample() {
  const showContextMenu = useContextMenu();

  const image = unsplashImages[0];
  const { src } = image.file;

  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          title: 'Copy to clipboard',
          onClick: () => copyImageToClipboard(src),
        },
        {
          key: 'download',
          icon: <IconDownload size={16} />,
          title: 'Download to your computer',
          onClick: () => downloadImage(src),
        },
      ])}
    />
  );
}
```

Make sure to browse the list of [usage examples](https://icflorescu.github.io/mantine-contextmenu/examples/basic-usage) to learn how to unleash the full power of Mantine ContextMenu.

## Other useful resources

💡 [Mantine DataTable](https://icflorescu.github.io/mantine-datatable/) - The "dark-theme aware" **data-table component** for your Mantine UI applications, built by the creator of Mantine ContextMenu.

## Code contributors

[![Contributors list](https://contrib.rocks/image?repo=icflorescu/mantine-contextmenu)](https://github.com/icflorescu/mantine-contextmenu/graphs/contributors)

Want to [become a code contributor](https://icflorescu.github.io/mantine-contextmenu/contribute-and-support)?

## Sponsor the project

If you find this package useful, please consider ❤️ [sponsoring my work](https://github.com/sponsors/icflorescu). Your sponsorship will help me dedicate more time to maintaining the project and will encourage me to add new features and fix existing bugs. If you're a company using Mantine ContextMenu in a commercial project, you can also [hire my services](https://github.com/icflorescu).

## Other means of support

If you find this package useful, please 🙏 star the repository, 💕 [tweet about it](https://twitter.com/share?text=Check%20out%20the%20missing%20context-menu%20for%20Mantine%20UI%20applications!&url=https%3A%2F%2Fgithub.com%2Ficflorescu%2Fmantine-contextmenu&hashtags=react%2Cmantine%2Cui%2Ccontextmenu%2Cfrontend%2Copensource&via=icflorescu), 👍 [endorse me on LinkedIn](https://www.linkedin.com/in/icflorescu) or consider hiring my services.

The more stars this repository gets, the more visibility it gains among the Mantine users community. The more
users it gets, the more chances that some of those users will become active code contributors willing to put
their effort into bringing new features to life and/or fixing bugs.

As the repository gain awareness, my chances of getting hired to work on Mantine-based projects will increase,
which in turn will help maintain my vested interest in keeping the project alive.

## Hiring the author

If you want to hire my services, don’t hesitate to drop me a line at the email address listed in my [GitHub profile](https://github.com/icflorescu).
I’m currently getting a constant flow of approaches, some of them relevant, others not so relevant.
Mentioning “Mantine ContextMenu” in your text would help me prioritize your message.

## License

The [MIT License](https://github.com/icflorescu/mantine-contextmenu/blob/master/LICENSE).

[npm-url]: https://npmjs.org/package/mantine-contextmenu
[repo-url]: https://github.com/icflorescu/mantine-contextmenu
[stars-url]: https://github.com/icflorescu/mantine-contextmenu/stargazers
[closed-issues-url]: https://github.com/icflorescu/mantine-contextmenu/issues?q=is%3Aissue+is%3Aclosed
[license-url]: LICENSE
[npm-image]: https://img.shields.io/npm/v/mantine-contextmenu.svg?style=flat-square
[license-image]: http://img.shields.io/npm/l/mantine-contextmenu.svg?style=flat-square
[downloads-image]: http://img.shields.io/npm/dm/mantine-contextmenu.svg?style=flat-square
[stars-image]: https://img.shields.io/github/stars/icflorescu/mantine-contextmenu?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/icflorescu/mantine-contextmenu?style=flat-square
[closed-issues-image]: https://img.shields.io/github/issues-closed-raw/icflorescu/mantine-contextmenu?style=flat-square
[language-image]: https://img.shields.io/github/languages/top/icflorescu/mantine-contextmenu?style=flat-square
[sponsor-image]: https://img.shields.io/badge/sponsor-violet?style=flat-square
[sponsor-url]: https://github.com/sponsors/icflorescu
