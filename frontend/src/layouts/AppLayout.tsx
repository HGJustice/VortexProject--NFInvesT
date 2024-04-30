import { type PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Navbar } from '@/components/Navbar';
import { useNavigation } from '@/hooks/useNavigation.hook';

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.page};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { navLinks } = useNavigation();

  return (
    <>
      <Navbar data={navLinks} />
      <Main>{children}</Main>
    </>
  );
};
