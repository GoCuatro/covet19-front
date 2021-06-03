declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_APP_BASEURL: 'http://localhost:8090';
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
