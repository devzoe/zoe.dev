// apps/blog/src/app/page.tsx

import { allPosts } from '.contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>블로그 목록</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post._id}>
            <Link href={`/posts/${post._raw.flattenedPath}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
