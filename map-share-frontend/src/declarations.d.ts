declare namespace DropboxTypes {
  interface DropboxOptions {
    fetch: any;
  }
}

declare interface ObjectConstructor {
  entries<X extends string, Y>(o: { [key in X]: Y }): [X, Y][];
}
