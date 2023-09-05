import { useRouter } from "next/router";
import React from "react";
import ProjectCard from "../../components/models/Projects";
import Stack from "../../components/models/Stack";
import { Navbar } from "../../components/NavBar/Navbar";
import {
  fetchPostById,
  fetchProjectById,
  fetchProjects,
  fetchStacks,
} from "../../src/api";
import { Post, Project } from "../../src/models";
import { Corrousal } from "../../components/common/Corrousal";
const Blog = ({ project }: { project: Post }) => {
  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px #00ff41",
    border: "solid 1px",
    margin: "4px 8px 4px 0px",
    backgroundColor: "black",
  };
  const imageUrl = project.Media.find((media) => media.is_logo);

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
          <div style={{
            display:"flex",
            justifyContent:"center"
          }}>
            <img src={imageUrl?.img!}  alt="Hero Image" />
          </div>
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
                <h2 style={{ marginBottom: "5px" }}>{project.title}</h2>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <a style={buttonStyle}>Sharre</a>
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
              {project.categories.map((stack) => (
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
          <div>
            <h2
              style={{
                padding: "20px",
              }}
            >
              Description
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: project.content }}
              style={{
                padding: "20px",
              }}
            ></p>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export async function getServerSideProps({ params }: any) {
  const project = await fetchPostById(Number(params.id));
  return {
    props: {
      project,
    },
  };
}

export default Blog;
