export type ElementOfArray<T> = T extends Array<infer U> ? U : never;
