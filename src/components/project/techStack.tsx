type Props = {
  tech: string;
};

export const TechStack = ({ tech }: Props) => {
  return <li className="shrink-0 text-xs sm:text-sm tracking-tight">#{tech}</li>;
};
