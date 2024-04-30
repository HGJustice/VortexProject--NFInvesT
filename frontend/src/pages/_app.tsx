import { Scroll } from '@particle-network/chains';
import { evmWallets } from '@particle-network/connect';
import { ModalProvider } from '@particle-network/connect-react-ui';
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/globalStyles';
import { theme } from '@/styles/theme';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<AP = unknown> = AppProps<AP> & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <ModalProvider
            options={{
              projectId: process.env
                .NEXT_PUBLIC_PARTICLE_NETWORK_PROJECT_ID as string,
              clientKey: process.env
                .NEXT_PUBLIC_PARTICLE_NETWORK_CLIENT_KEY as string,
              appId: process.env.NEXT_PUBLIC_PARTICLE_NETWORK_APP_ID as string,
              chains: [Scroll],
              wallets: evmWallets({
                projectId: process.env
                  .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
                showQrModal: false,
              }),
            }}
          >
            {getLayout(<Component {...pageProps} />)}
          </ModalProvider>
          <GlobalStyles />
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
