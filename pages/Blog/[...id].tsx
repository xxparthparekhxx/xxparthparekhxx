import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';
import Markdown from 'react-markdown';

import { Navbar } from '../../components/NavBar/Navbar';
import Stack from '../../components/models/Stack';
import { fetchPostById, fetchPosts } from '../../src/api';
import { Post } from '../../src/models';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface BlogProps {
  post: Post;
}

const Blog: React.FC<BlogProps> = ({ post }) => {
  const logoMedia = post.Media.find((media) => media.is_logo);

  return (
    <Navbar>
      <div className="flex justify-center items-center p-4">
        <Card className="w-full max-w-4xl bg-black text-white shadow-lg">
          <CardHeader className="border-b border-gray-700">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <Button variant="ghost" size="sm">
                Share
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 mt-4">
            <section>
              <h2 className="text-xl font-semibold mb-2">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((stack) => (
                  <Stack
                    key={stack.id}
                    {...stack}
                    iconOnly={false}
                    selected={false}
                    setStackSort={() => {}}
                  />
                ))}
              </div>
            </section>
            {logoMedia && (
              <div className="flex justify-center">
                <Image
                  src={logoMedia.img!}
                  alt="Post logo"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            )}
            <article className="prose prose-invert max-w-none">
              <Markdown className={"markdown"}>{post.content}</Markdown>
            </article>
          </CardContent>
        </Card>
      </div>
    </Navbar>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Array.isArray(params?.id) ? params?.id.join('/') : params?.id;
  const post = await fetchPostById(Number(id));

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchPosts();

  return {
    paths: posts.map((post) => ({
      params: { id: [post.id.toString()] },
    })),
    fallback: 'blocking',
  };
};

export default Blog;