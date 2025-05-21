import { Post } from '@/interfaces/post';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  posts: Post[];
  currentTag: string;
  setCurrentTag: Dispatch<SetStateAction<string>>;
  setFilteredPosts: Dispatch<SetStateAction<Post[]>>;
};

export const Tags = ({ posts, currentTag, setCurrentTag, setFilteredPosts }: Props) => {
  const tags = [...new Set((posts).flatMap(post => post.tags))];

  const filterByTag = (tag: string) => {
    if (tag === currentTag) {
      setCurrentTag('');
      setFilteredPosts(posts);
      return;
    }

    setCurrentTag(tag);
    setFilteredPosts(posts.filter(post => post.tags.includes(tag)));
  };

  return (
    <>
      {tags.map(tag => (
        <li
          key={tag}
          className={twMerge(
            'px-2 border bg-white text-sm tracking-tight list-none cursor-pointer',
            tag === currentTag && 'border-zinc-950 bg-zinc-950 text-white',
          )}
          onClick={() => filterByTag(tag)}
        >
          {tag}
        </li>
      ))}
    </>
  );
};
