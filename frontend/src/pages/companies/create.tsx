import { useAccount } from '@particle-network/connect-react-ui';
import { ReactElement, useEffect, useState } from 'react';

import { Dialog, Heading, PageDescription } from '@/components';
import { AppLayout } from '@/layouts/AppLayout';
import { UnauthorizedMessage } from '@/modules/auth';
import { CreateCompany } from '@/modules/companies';

import { NextPageWithLayout } from '../_app';

const CreateCompanyPage: NextPageWithLayout = () => {
  const account = useAccount();

  const [ready, setReady] = useState<boolean>();

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <Dialog isOpen={!account} showCloseIcon={false}>
        <UnauthorizedMessage />
      </Dialog>
      <Heading size="h1">Create company</Heading>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PageDescription>
      <CreateCompany />
    </>
  );
};

CreateCompanyPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CreateCompanyPage;
