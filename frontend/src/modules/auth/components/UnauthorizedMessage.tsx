import { useConnectModal } from '@particle-network/connect-react-ui';
import Link from 'next/link';
import styled from 'styled-components';

import { Button, Heading, UnauthorizedIcon, WalletIcon } from '@/components';
import { routes } from '@/routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} 100px;

  > svg {
    height: ${({ theme }) => theme.icon.xl};
    width: auto;
  }
`;

const Description = styled.p`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const UnauthorizedMessage = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <Wrapper>
      <UnauthorizedIcon />
      <Heading size="h2">Unauthorized</Heading>
      <Description>
        To see the content on this page, you need to log in.
      </Description>
      <ButtonContainer>
        <Button
          onClick={openConnectModal}
          variant="primary"
          icon={<WalletIcon />}
        >
          Login
        </Button>
        <Link href={routes.home}>
          <Button>Back to home</Button>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};
