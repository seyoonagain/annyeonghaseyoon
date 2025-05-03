type Props = {
  link: string;
};

export const Link = ({ link }: Props) => {
  return (
    <a key={link} href={link} target="_blank" className="font-manrope text-sm underline">
      {link.includes('github') ? 'github' : 'demo'}
    </a>
  );
};
