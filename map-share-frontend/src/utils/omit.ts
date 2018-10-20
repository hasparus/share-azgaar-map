export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  // tslint:disable-next-line:prefer-object-spread <- { ...obj } doesn't work on generic T
  const shallowCopy = Object.assign({}, obj);

  // tslint:disable-next-line:prefer-for-of
  for (const key of keys) {
    delete shallowCopy[key];
  }

  return shallowCopy;
}
