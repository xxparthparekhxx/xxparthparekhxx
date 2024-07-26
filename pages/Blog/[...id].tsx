import { useRouter } from "next/router";
import React from "react";
import ProjectCard from "../../components/models/Projects";
import Stack from "../../components/models/Stack";
import { Navbar } from "../../components/NavBar/Navbar";
import {
  fetchPostById,
  fetchPosts,
  fetchProjectById,
  fetchProjects,
  fetchStacks,
} from "../../src/api";
import Markdown from "react-markdown";
import { Post, Project } from "../../src/models";
import { Corrousal } from "../../components/common/Corrousal";
const Blog = ({ post }: { post: Post }) => {
  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px #00ff41",
    border: "solid 1px",
    margin: "4px 8px 4px 0px",
    backgroundColor: "black",
  };
  const imageUrl = post.Media.find((media) => !media.is_logo);

  return (
    <Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "20px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <div>
            <div
              style={{
                margin: "15px",
                border: "solid 1px 0px 1px 0px",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0px 0px 5px #00ff41",
                transition:
                  "box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "black",
              }}
            >
              <div>
                <h2 style={{ marginBottom: "5px" }}>{post.title}</h2>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <a style={buttonStyle}>Share</a>
                </div>
              </div>
            </div>

            <h2
              style={{
                padding: "20px",
              }}
            >
              Categories
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                // border: "solid 1px white",
              }}
            >
              {post.categories.map((stack) => (
                <Stack
                  iconOnly={false}
                  key={stack.id}
                  {...stack}
                  selected={false}
                  setStackSort={() => {}}
                ></Stack>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "80%",
              }}
              src={imageUrl?.img!}
              alt="logo"
            />
          </div>
          <div>
            <div style={{ margin: "20px", overflow:"scroll"}}>
              <Markdown >{post.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};


export async function getStaticProps({ params }: { params: { id: string[] } }) {
  const id = params.id.join('/'); // Join the array elements if needed
  const post = await fetchPostById(Number(id));

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: 1800, // Revalidate every 60 seconds
  };
}

export async function getStaticPaths() {
  const posts = await fetchPosts();
  
  return {
    paths: posts.map((post) => ({ 
      params: { id: [post.id.toString()] } // Wrap the id in an array
    })),
    fallback: 'blocking',
  };
}
export default Blog;
