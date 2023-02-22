export type ExtractFlat<T extends string> = T extends `${infer U}.${string}`
  ? U
  : T;
