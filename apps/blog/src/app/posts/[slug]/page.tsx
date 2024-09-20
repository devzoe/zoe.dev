import { notFound } from 'next/navigation';
import { allPosts } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PageProps) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <h1>{post.title}</h1>
      <MDXContent />
    </div>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}
