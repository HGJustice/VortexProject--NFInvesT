import type { FunctionComponent, SVGAttributes } from 'react';

import { routes } from '@/routes';

export type NavLink = {
  href: string;
  icon?: FunctionComponent<SVGAttributes<SVGElement>>;
  label: string;
  pattern: string;
};

export const useNavigation = () => {
  const navLinks: NavLink[] = [
    {
      href: routes.home,
      label: 'Home',
      pattern: '^/$',
    },
    {
      href: routes.companies,
      label: 'Companies',
      pattern: '^/companies',
    },
    {
      href: routes.mintToken,
      label: 'Mint token',
      pattern: '^/mintToken',
    },
    {
      href: routes.createListing,
      label: 'List Token',
      pattern: '^/listing',
    },
    {
      href: routes.marketplace,
      label: 'Marketplace',
      pattern: '^/marketplace',
    },
  ];

  return { navLinks };
};
