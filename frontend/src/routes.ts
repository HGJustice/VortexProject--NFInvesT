export const routes = {
  home: '/',
  companies: '/companies',
  company: (id: string) => `/companies/${id}`,
  createCompany: '/companies/create',
  marketplace: '/marketplace',
  mintToken: '/mintToken/create',
  createListing: '/listing/create',
  buyListing: '/listing/buy',
};
