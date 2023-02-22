export type RequiredBy<T, K extends string> = Required<
  Pick<T, Extract<K, keyof T>>
> &
  Omit<T, Extract<K, keyof T>>;
