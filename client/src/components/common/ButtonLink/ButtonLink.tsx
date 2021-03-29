import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button, { ButtonProps, ButtonSizes, ButtonVariants } from 'components/common/Button/Button';

export const ButtonLinkSizes = ButtonSizes;

export const ButtonLinkVariants = ButtonVariants;

interface ButtonLinkProps extends ButtonProps {
  to: string;
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ children, to, ...props }) => (
  <RouterLink to={to}>
    <Button {...props}>{children}</Button>
  </RouterLink>
);

export default ButtonLink;
