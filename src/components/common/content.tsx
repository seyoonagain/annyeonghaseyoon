type Props = {
  html: string;
};

export const Content = ({ html }: Props) => {
  return <div className="markdown tracking-tight" dangerouslySetInnerHTML={{ __html: html }}></div>;
};
