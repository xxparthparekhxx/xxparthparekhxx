import React from "react";
import { Navbar } from "../components/NavBar/Navbar";
import { fetchPosts } from "../src/api";
import { Post } from "../src/models";
import { useRouter } from "next/router";

export const BlogTile = (blog: Post) => {
  console.log(blog.Media)
  const imageUrl = blog.Media.find((media) => media.is_logo);
  const router = useRouter()


  return (
    <div
      onClick={(e) => {
        router.push("Blog/"+blog.id)
      }}
      style={{
        border: "solid 1px white",
        padding: "10px",
        cursor: "pointer",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
          }}
        >
          <img

          style={{
            borderRadius:"16px"
          }}


            height={"100px"}
            src={imageUrl?.img!}
            alt=""
          />
        </div>
        <div
          style={{
            padding: "15px",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3>{blog.title}</h3>
            <div>{blog.date_posted}</div>
          </div>
          <div style={{ marginTop: "10px" }}>
        {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ posts }: { posts: Post[] }) => {
  console.log("posts",posts);
  return (
    <Navbar>
      {posts.map((post) => (
        <BlogTile {...post}></BlogTile>
      ))}
    </Navbar>
  );
};
export async function getServerSideProps(context: any) {
  const posts = await fetchPosts();
  return { props: { posts } };
}

export default Blog;
