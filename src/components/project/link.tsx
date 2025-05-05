type Props = {
  link: string;
};

export const Link = ({ link }: Props) => {
  return (
    <a
      key={link}
      href={link}
      target="_blank"
      className="px-2 py-px border rounded-2xl bg-white font-manrope text-xs sm:text-sm"
    >
      {link.includes('github.com') ? 'GitHub' : 'Demo'}
    </a>
  );
};
