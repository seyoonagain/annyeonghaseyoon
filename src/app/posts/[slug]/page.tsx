import { Content, DateFormatter } from '@/components/common';
import markdownToHtml from '@/lib/markdownToHtml';
import { getPostBySlug } from '@/lib/postApi';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

const Post = async ({ params }: Props) => {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const { title, date } = post;

  const content = await markdownToHtml(post.content);

  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl h-full pt-6">
      <h1 className="absolute top-0 right-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest">
        {title}
      </h1>
      <DateFormatter dateString={date} className="absolute top-0 left-1/2 -translate-x-1/2" />
      <Content html={content} />
    </div>
  );
};

export default Post;
