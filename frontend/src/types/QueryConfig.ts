import type { UseQueryOptions } from '@tanstack/react-query';

export type QueryConfig<TData, TError = unknown> = UseQueryOptions<
  TData,
  TError
>;
