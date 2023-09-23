import React from "react";
import { Navbar } from "../components/NavBar/Navbar";
import { fetchPosts } from "../src/api";
import { Post } from "../src/models";
import { useRouter } from "next/router";
import { GradientBorder } from "../components/common/GradientBorder";
import Hoverborder from "../components/common/Hoverborder";
import FocusOnMouseEnter from "../components/eye/FocusOnMouseEnter";

export const BlogTile = (blog: Post) => {
  console.log(blog.Media)
  const imageUrl = blog.Media.find((media) => media.is_logo);
  const router = useRouter()
  function formatDateAndTime(date: Date): string {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
    const yy = String(date.getFullYear()).slice(-2);
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
  
    return `${dd} ${mm} ${yy}" ${hh}:${min}`;
  }

  return (
  <div style={{margin:"20px"}}>
<FocusOnMouseEnter>

  <Hoverborder>

    <div
      onClick={(e) => {
        router.push("Blog/"+blog.id)
      }}
      style={{
        padding: "10px",
        cursor: "pointer",
        margin: "20px",
        borderRadius: "10px",
      }}>
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
            <div>{formatDateAndTime(new Date(blog.date_posted) )}</div>
          </div>
          <div style={{ marginTop: "10px" }}>
        {blog.metadata}
          </div>
        </div>
      </div>
    </div>
  </Hoverborder>
</FocusOnMouseEnter>
  
  </div>

  );
};

const Blog = ({ posts }: { posts: Post[] }) => {
  console.log("posts",posts);
  return (
    <Navbar>
      {posts.map((post,I) => (
        <BlogTile key={I} {...post}></BlogTile>
      ))}
    </Navbar>
  );
};
export async function getServerSideProps(context: any) {
  const posts = await fetchPosts();
  return { props: { posts } };
}

export default Blog;
