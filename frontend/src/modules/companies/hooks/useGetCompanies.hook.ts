import { useQuery } from '@tanstack/react-query';

import {
  GetCompanyListQuery,
  GetCompanyListQueryVariables,
} from '@/gql/graphql';
import { QueryConfig } from '@/types/QueryConfig';

import { getCompanies } from '../api';
import { companiesQueryKeys } from '../common';

export const useGetCompanies = (
  params: GetCompanyListQueryVariables,
  config?: QueryConfig<GetCompanyListQuery>,
) => {
  return useQuery({
    queryFn: async () => await getCompanies(params),
    queryKey: companiesQueryKeys.list(params),
    ...config,
  });
};
