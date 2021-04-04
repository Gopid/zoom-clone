import { FunctionComponent } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  className?: string;
}

const Link: FunctionComponent<LinkProps> = ({ className, children, ...props }) => (
  <NextLink passHref={Boolean(className)} {...props}>
    <a className={className}>{children}</a>
  </NextLink>
);

export default Link;
