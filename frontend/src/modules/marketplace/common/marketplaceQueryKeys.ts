import { GetMarketplaceListQueryVariables } from '@/gql/graphql';

export const marketplaceQueryKeys = {
  all: ['marketplace'] as const,
  lists: () => [...marketplaceQueryKeys.all, 'list'] as const,
  list: (params: GetMarketplaceListQueryVariables) =>
    [...marketplaceQueryKeys.lists(), { params }] as const,
};
