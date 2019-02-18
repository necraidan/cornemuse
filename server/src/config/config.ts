interface Configuration {
  app: {
    port: number;
  };
  endpoints?: Endpoints;
}

export interface Endpoints {
  [index: string]: {
    target: string;
    headers: {};
  };
}

let config = {
  app: {
    port: 7777
  }
};

export const Config: Configuration = config;
