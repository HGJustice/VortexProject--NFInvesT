import { type ReactElement } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { CompanyList } from '@/modules/companies';

import { type NextPageWithLayout } from '../_app';

const Companies: NextPageWithLayout = () => {
  return (
    <>
      <Heading size="h1">Companies</Heading>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PageDescription>
      <CompanyList />
    </>
  );
};

Companies.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Companies;
