import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

type LinkProps = NextLinkProps & {
  children: ReactNode;
};

export const StyledLink = (props: LinkProps) => {
  const { children, ...rest } = props;
  return (
    <NextLink className="underline text-cyan-300" {...rest}>
      {children}
    </NextLink>
  );
};
