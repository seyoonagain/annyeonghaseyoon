type Props = {
  tech: string;
};

export const TechStack = ({ tech }: Props) => {
  return <li className="font-manrope text-sm">{tech}</li>;
};
