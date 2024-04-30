import { type ReactElement } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { MarketplaceList } from '@/modules/marketplace/components/MarketplaceList';

import { type NextPageWithLayout } from '../_app';

const Marketplace: NextPageWithLayout = () => {
  return (
    <>
      <Heading size="h1">Marketplace</Heading>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PageDescription>
      <MarketplaceList />
    </>
  );
};

Marketplace.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Marketplace;
