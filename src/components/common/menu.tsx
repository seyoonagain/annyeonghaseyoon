import Link from 'next/link';

export type MenuItem = {
  title: string;
  href: string;
  target: '_blank' | '_self';
};

type Props = {
  menu: MenuItem;
};

export const Menu = ({ menu: { title, href, target } }: Props) => {
  return (
    <Link href={href} target={target}>
      <p className="tracking-tighter hover:underline">{title}</p>
    </Link>
  );
};
