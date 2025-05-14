import { PostList } from '@/components/posts';
import { getAllPosts } from '@/lib/postApi';

const Posts = () => {
  const posts = getAllPosts();

  return <PostList posts={posts} />;
};

export default Posts;
