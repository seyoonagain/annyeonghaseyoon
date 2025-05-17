'use client';

import { Placeholder } from '@/components/posts/placeholder';
import { PostItem } from '@/components/posts/postItem';
import { Tags } from '@/components/posts/tags';
import { Post } from '@/interfaces/post';
import { useState } from 'react';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [currentTag, setCurrentTag] = useState<string>('');

  const totalPosts: number = filteredPosts.length;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full max-w-7xl h-full pt-4">
      <ul className="flex lg:flex-col lg:items-end self-start gap-2 flex-wrap">
        <Tags
          posts={posts}
          currentTag={currentTag}
          setCurrentTag={setCurrentTag}
          setFilteredPosts={setFilteredPosts}
        />
      </ul>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full hover:animate-bgColorShift saturate-50">
        {filteredPosts.map((post, index) => (
          <PostItem key={post.slug} post={post} index={index} totalPosts={totalPosts} />
        ))}

        {[2, 3].map(divisor => (
          <Placeholder
            key={divisor}
            totalPosts={totalPosts}
            divisor={divisor}
            className={`${divisor === 2 ? 'sm:block lg:hidden' : 'lg:block'}`}
          />
        ))}
      </ul>
    </div>
  );
};
