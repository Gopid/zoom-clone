import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'components/common/Link/Link';
import ButtonLink, {
  ButtonLinkVariants,
  ButtonLinkSizes,
} from 'components/common/ButtonLink/ButtonLink';
import routes from 'routes';

const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <StyledNav>
      <Link href={routes.ROOT}>
        <StyledLogo src="/ZoomLogo.png" alt="Zoom logo" height={25} width={110} />
      </Link>
      <div>
        <StyledMenuItem href={routes.JOIN}>JOIN A MEETING</StyledMenuItem>
        <StyledMenuItem href={routes.SIGN_IN}>SIGN IN</StyledMenuItem>
        <ButtonLink
          href={routes.SIGN_UP}
          variant={ButtonLinkVariants.primaryOrange}
          size={ButtonLinkSizes.small}
        >
          SIGN UP, IT&apos;S FREE
        </ButtonLink>
      </div>
    </StyledNav>
  </StyledHeader>
);

const StyledHeader = styled.header`
  ${({ theme }) => `
    border-bottom: ${theme.pxToRem(1)} solid ${theme.colors.divider};
  `}
`;

const StyledNav = styled.nav`
  ${({ theme }) => `
    height: ${theme.pxToRem(64)};
    max-width: ${theme.pxToRem(1350)};
  `}
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(Image)`
  ${({ theme }) => `
    margin-right: ${theme.pxToRem(20)};
  `}
`;

const StyledMenuItem = styled(Link)`
  ${({ theme }) => `
    font-size: ${theme.pxToRem(12)};
    font-weight: 600;
    margin-right: ${theme.pxToRem(15)};
    text-decoration: none;
    background: none;
    color: ${theme.colors.primaryBlue};
  `}
`;

export default Header;
