/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GITHUB_PAGES: boolean;
    PACKAGE_VERSION: string;
    INITIAL_NPM_DOWNLOADS: number;
  }
}
