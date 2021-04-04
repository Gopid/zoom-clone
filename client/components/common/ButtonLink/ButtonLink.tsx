import React, { FunctionComponent } from 'react';
import Link from 'components/common/Link/Link';
import Button, { ButtonProps, ButtonSizes, ButtonVariants } from 'components/common/Button/Button';

export const ButtonLinkSizes = ButtonSizes;

export const ButtonLinkVariants = ButtonVariants;

interface ButtonLinkProps extends ButtonProps {
  href: string;
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ children, href, ...props }) => (
  <Link href={href}>
    <Button {...props}>{children}</Button>
  </Link>
);

export default ButtonLink;
