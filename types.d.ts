namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GITHUB_PAGES: 'TRUE' | 'FALSE';
    PACKAGE_NAME: 'mantine-contextmenu';
    PACKAGE_VERSION: string;
    INITIAL_NPM_DOWNLOADS: string;
  }
}
