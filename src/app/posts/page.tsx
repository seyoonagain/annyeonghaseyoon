import { DateFormatter } from '@/components/common';
import { getAllPosts } from '@/lib/postApi';
import Link from 'next/link';

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl animate-bgColorShift">
      {posts.map(({ title, slug, date, tags }) => (
        <Link
          href={`/posts/${slug}`}
          key={slug}
          className="flex flex-col items-start gap-2 shrink-0 relative w-full h-20 px-4 py-2 border border-x-0 not-last:border-b-0 bg-white hover:bg-transparent cursor-pointer"
          aria-label={`Go to ${slug}: ${title}`}
        >
          <DateFormatter dateString={date} className="absolute top-2 left-4 text-base font-light" />

          <div className="flex justify-end items-start w-full h-full">
            <span className="text-wrap text-end font-semibold text-lg sm:text-xl text-zinc-800 tracking-tighter">
              {title}
            </span>
          </div>

          <ul className="flex justify-end items-end gap-2 w-full">
            {tags.map(tag => (
              <li key={tag} className="text-xs list-none">
                #{tag}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
