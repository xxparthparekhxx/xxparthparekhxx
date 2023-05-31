import { useRouter } from "next/router";
import React from "react";
import ProjectCard from "../../components/models/Projects";
import Stack from "../../components/models/Stack";
import { Navbar } from "../../components/NavBar/Navbar";
import { fetchProjectById, fetchProjects, fetchStacks } from "../../src/api";
import { Project } from "../../src/models";
import { Corrousal } from "../../components/common/Corrousal";
const ProjectDescription = ({ project }: { project: Project }) => {
  const buttonStyle = {
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px #ffc4ff",
    border: "solid 1px",
    margin: "4px 8px 4px 0px",
    backgroundColor:'black',
  };
 
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
                borderRadius: "20px" ,
                padding: "20px",
                boxShadow: "0px 0px 5px #ffc4ff",
                transition: "box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor:'black',
              }}
            >
              <div>
                <h2 style={{ marginBottom: "5px" }}>{project.name}</h2>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {project.hosted_url && (
                    <a style={buttonStyle} href={project.hosted_url}>
                      {" "}
                      Visit{" "}
                    </a>
                  )}

                  {project.github_url && (
                    <a style={buttonStyle} href={project.github_url}>
                      View Github prepo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div style={{margin:"10px",padding:"10px"}}>
              <Corrousal medias={project.medias}></Corrousal>
            </div>

            <h2
              style={{
                padding: "20px",
              }}
            >
              Stack Used
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                // border: "solid 1px white",
              }}
            >
              {project.stacks.map((stack) => (
                <Stack
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
              dangerouslySetInnerHTML={{ __html: project.description_page_html }}
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
  const project = await fetchProjectById(Number(params.id));
  return {
    props: {
      project,
    },
  };
}

export default ProjectDescription;
