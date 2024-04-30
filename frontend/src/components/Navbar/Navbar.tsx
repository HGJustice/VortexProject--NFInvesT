import '@particle-network/connect-react-ui/dist/index.css';

import {
  useAccount,
  useConnectModal,
} from '@particle-network/connect-react-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Button, UserCircleIcon, WalletIcon } from '@/components';
import { type NavLink } from '@/hooks';

const MenuItemList = styled.ul`
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li<{ $isActive?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: ${({ theme }) => theme.spacing.xsm};
  font-weight: ${({ $isActive }) => ($isActive ? 800 : 500)};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral.subtle : theme.colors.primary.subtle};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.main};
  }

  svg {
    height: ${({ theme }) => theme.icon.default};
    width: auto;
    color: ${({ theme }) => theme.colors.success.main};
  }
`;

const StyledNav = styled.nav`
  margin: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.page};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  display: flex;
  justify-content: space-between;
`;

const AppLogo = styled.span`
  color: ${({ theme }) => theme.colors.success.main};
  font-weight: 800;
  cursor: default;
`;

type NavbarProps = {
  data: NavLink[];
};

export const Navbar = ({ data }: NavbarProps) => {
  const { openConnectModal } = useConnectModal();
  const { pathname } = useRouter();
  const account = useAccount();

  return (
    <>
      <StyledNav>
        <MenuItemList>
          <AppLogo>NFInvesT</AppLogo>
          {data.map(item => {
            const isActive = !!pathname.match(item.pattern);
            return (
              <Link href={item.href} key={item.href}>
                <MenuItem $isActive={isActive}>{item.label}</MenuItem>
              </Link>
            );
          })}
        </MenuItemList>
        <MenuItemList>
          {!account && (
            <Button
              variant="primary"
              onClick={openConnectModal}
              icon={<WalletIcon />}
            >
              Login
            </Button>
          )}
          {account && (
            <MenuItem>
              <UserCircleIcon />
              {account}
            </MenuItem>
          )}
        </MenuItemList>
      </StyledNav>
    </>
  );
};
