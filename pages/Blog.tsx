import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Markdown from "react-markdown";
import { GetStaticProps } from "next";

import { Navbar } from "../components/NavBar/Navbar";
import { fetchPosts } from "../src/api";
import { Post } from "../src/models";
import FocusOnMouseEnter from "../components/eye/FocusOnMouseEnter";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formatDateAndTime = (date: Date): string => {
  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

interface BlogTileProps {
  blog: Post;
}

interface BlogTileProps {
  blog: Post;
}

const BlogTile: React.FC<BlogTileProps> = ({ blog }) => {
  const router = useRouter();
  const imageUrl = blog.Media.find((media) => media.is_logo);
  console.log(imageUrl);
  return (
    <Card
      className="m-4 bg-black border border-green-500 hover:shadow-[0_0_10px_#4ade80] transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={() => router.push(`Blog/${blog.id}`)}
    >
    
      <CardContent className="p-0 relative">
        <div className="absolute top-0 left-0 right-0 bg-green-500 p-2">
          <h3 className="text-black text-lg font-bold">{blog.title}</h3>
        </div>
        {imageUrl && (
        <div className="flex pt-20 justify-center">
          <Image
            src={imageUrl.img!}
            alt={blog.title}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      )}

        <div className="pt-4 px-4 pb-4 text-white">
          <Markdown className={"markdown text-sm"}>{blog.metadata}</Markdown>
        </div>
      </CardContent>
    </Card>
  );
};

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <Navbar>
      <div className="container mx-auto px-4 bg-black text-white">
        <h1 className="text-3xl font-bold my-8 text-green-400">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogTile key={post.id} blog={post} />
          ))}
        </div>
      </div>
    </Navbar>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return {
    props: { posts },
    revalidate: 1800,
  };
};

export default BlogList;
