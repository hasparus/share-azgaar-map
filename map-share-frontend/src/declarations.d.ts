declare namespace DropboxTypes {
  interface DropboxOptions {
    fetch: typeof window.fetch;
  }
}

declare interface ObjectConstructor {
  entries<X extends string, Y>(o: { [key in X]: Y }): [X, Y][];
}
