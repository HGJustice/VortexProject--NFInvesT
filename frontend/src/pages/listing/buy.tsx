import { ReactElement, useEffect, useState } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { MintToken } from '@/modules/companies';

import { NextPageWithLayout } from '../_app';

const BuyListingPage: NextPageWithLayout = () => {
  const [ready, setReady] = useState<boolean>();

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <Heading size="h1">Buy Token Share</Heading>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PageDescription>
      <MintToken />
    </>
  );
};

BuyListingPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default BuyListingPage;
