import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

export type ActiveLinkProps = {
  children: React.ReactElement;
} & LinkProps;

const ActiveLink = ({ children, ...props }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const isActive = asPath === props.href;

  return <Link {...props}>{cloneElement(children, { isActive })}</Link>;
};

export default ActiveLink;
