type Props = {
  html: string;
};

export const Content = ({ html }: Props) => {
  return (
    <div className="markdown tracking-tight pb-32" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};
