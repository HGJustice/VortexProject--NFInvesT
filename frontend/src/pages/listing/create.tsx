import { ReactElement, useEffect, useState } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { ListToken } from '@/modules/token/components/ListToken';

import { NextPageWithLayout } from '../_app';

const CreateListingPage: NextPageWithLayout = () => {
  const [ready, setReady] = useState<boolean>();

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <Heading size="h1">List Your Token</Heading>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PageDescription>
      <ListToken />
    </>
  );
};

CreateListingPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CreateListingPage;
