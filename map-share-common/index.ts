export type Map = {
  path: string;
  temporaryLink: string;
};

export namespace dataTransfer {
  export type Maps = {
    maps: Map[];
  };
}

export * from './urls';
