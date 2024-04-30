import { request } from 'graphql-request';

import { apiUrl } from '@/constants';
import {
  GetCompanyListDocument,
  GetCompanyListQuery,
  GetCompanyListQueryVariables,
} from '@/gql/graphql';

export const getCompanies = (params: GetCompanyListQueryVariables) => {
  return request<GetCompanyListQuery, GetCompanyListQueryVariables>(
    apiUrl,
    GetCompanyListDocument.toString(),
    params,
  );
};
