import Link from 'next/link';
import { useRouter } from 'next/router';
import AppNavbarButton, { AppNavbarButtonDisplayProps } from './AppNavbarButton';
import classes from './AppNavbarLink.module.css';

type AppNavbarLinkProps = AppNavbarButtonDisplayProps & { to: string };

export default function AppNavbarLink({ to, ...displayProps }: AppNavbarLinkProps) {
  const { asPath } = useRouter();
  return (
    <Link className={classes.root} href={to}>
      <AppNavbarButton {...displayProps} active={to === asPath} />
    </Link>
  );
}
