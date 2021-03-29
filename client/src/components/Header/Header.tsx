import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonLink, {
  ButtonLinkVariants,
  ButtonLinkSizes,
} from 'components/common/ButtonLink/ButtonLink';
import routes from 'routes';

const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <StyledNav>
      <Link to={routes.ROOT}>
        <StyledLogo src="/ZoomLogo.png" alt="Zoom logo" />
      </Link>
      <div>
        <StyledMenuItem to={routes.SIGN_IN}>JOIN A MEETING</StyledMenuItem>
        <StyledMenuItem to={routes.SIGN_IN}>SIGN IN</StyledMenuItem>
        <ButtonLink
          to={routes.SIGN_UP}
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

const StyledLogo = styled.img`
  ${({ theme }) => `
    height: ${theme.pxToRem(25)};
    margin-right: ${theme.pxToRem(20)};
  `}
  width: auto;
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
