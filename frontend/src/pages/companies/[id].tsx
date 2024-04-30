import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { NextPageWithLayout } from '@/pages/_app';

const CompanyPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  return (
    <>
      <Heading size="h1">CompanyId: {id}</Heading>{' '}
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PageDescription>
    </>
  );
};

CompanyPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CompanyPage;
