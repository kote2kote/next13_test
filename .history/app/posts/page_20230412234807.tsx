import type { Metadata } from 'next';
import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Posts',
};

export default async function PostsPage() {
  const postsData = await getAllPosts();

  const posts = await postsData;

  const content = (
    <section>
      <h2>
        <Link href='/'>Back to Home</Link>
      </h2>
      <br />
      {posts.map((post) => {
        return (
          <>
            <p key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title.rendered}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
