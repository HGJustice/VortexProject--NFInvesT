import { request } from 'graphql-request';

import { apiUrl } from '@/constants';
import {
  GetMarketplaceListDocument,
  GetMarketplaceListQuery,
  GetMarketplaceListQueryVariables,
} from '@/gql/graphql';

export const getMarketplaceList = (
  params: GetMarketplaceListQueryVariables,
) => {
  return request<GetMarketplaceListQuery, GetMarketplaceListQueryVariables>(
    apiUrl,
    GetMarketplaceListDocument.toString(),
    params,
  );
};
