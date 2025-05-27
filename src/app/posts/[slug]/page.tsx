import { Comment, Content, DateFormatter } from '@/components/common';
import { Toc } from '@/components/posts';
import { getPostBySlug } from '@/lib/postApi';
import { notFound } from 'next/navigation';
import markdownToHtml from '@/lib/markdownToHtml';
import extractToc from '@/lib/extractToc';
import { twMerge } from 'tailwind-merge';

type Props = {
  params: Promise<{ slug: string }>;
};

const Post = async ({ params }: Props) => {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const { title, date, content, tags } = post;

  const contentHtml = await markdownToHtml(content);

  const tocItems = await extractToc(content);

  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl h-full pt-6">
      <h1
        className={twMerge(
          'absolute top-0 left-10 text-4xl sm:text-5xl md:text-6xl tracking-tightest transition ease-in-out',
        )}
      >
        {title}
      </h1>

      <DateFormatter
        dateString={date}
        className="absolute top-10 sm:top-12 md:top-16 lg:top-2 right-2"
      />

      <Toc tocItems={tocItems} />
      <Content html={contentHtml} />

      <ul className="flex gap-2 border-t mb-10">
        {tags.map(tag => (
          <li key={tag} className="text-sm list-none">
            #{tag}
          </li>
        ))}
      </ul>

      <Comment />
    </div>
  );
};

export default Post;
