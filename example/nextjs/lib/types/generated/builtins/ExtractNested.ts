export type ExtractNested<T, K extends string> = T extends `${K}.${infer U}`
  ? U
  : never;
