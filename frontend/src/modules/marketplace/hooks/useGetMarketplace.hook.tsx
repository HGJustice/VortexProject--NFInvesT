import { useQuery } from '@tanstack/react-query';

import {
  GetMarketplaceListQuery,
  GetMarketplaceListQueryVariables,
} from '@/gql/graphql';
import { marketplaceQueryKeys } from '@/modules/marketplace/common';
import { QueryConfig } from '@/types/QueryConfig';

import { getMarketplaceList } from '../api';

export const useGetMarketplace = (
  params: GetMarketplaceListQueryVariables,
  config?: QueryConfig<GetMarketplaceListQuery>,
) => {
  return useQuery({
    queryFn: async () => await getMarketplaceList(params),
    queryKey: marketplaceQueryKeys.list(params),
    ...config,
  });
};
