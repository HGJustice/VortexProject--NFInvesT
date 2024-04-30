import { GetCompanyListQueryVariables } from '@/gql/graphql';

export const companiesQueryKeys = {
  all: ['companies'] as const,
  lists: () => [...companiesQueryKeys.all, 'list'] as const,
  list: (params: GetCompanyListQueryVariables) =>
    [...companiesQueryKeys.lists(), { params }] as const,
};
