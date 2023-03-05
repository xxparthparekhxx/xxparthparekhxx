import { useRouter } from "next/router";
import React from "react";
import ProjectCard from "../../components/models/Projects";
import Stack from "../../components/models/Stack";
import { Navbar } from "../../components/NavBar/Navbar";
import { fetchProjectById, fetchProjects, fetchStacks } from "../../src/api";
import { Project } from "../../src/models";
import { Corrousal } from "../../components/common/Corrousal";
const ProjectDescription = ({ project }: { project: Project }) => {
  return (
    <Navbar>
      <div>
        <div>
          <div
            style={{
              margin: "10px",
              border: "solid 1px white",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2>{project.name}</h2>
              <div>
                {project.hosted_url && (
                  <div>{<a href={project.hosted_url}> Visit </a>}</div>
                )}

                {project.github_url && (
                  <div>
                    {<a href={project.github_url}>View Github prepo</a>}
                  </div>
                )}
              </div>
            </div>
            <div>
              ({project.start_date} - {project.end_date})
            </div>
          </div>
          <div>
            <Corrousal medias={project.medias}></Corrousal>
          </div>
          <h2>Stack Used</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // border: "solid 1px white",
            }}
          >
            {project.stacks.map((stack) => (
              <Stack
                {...stack}
                selected={false}
                setStackSort={() => {}}
              ></Stack>
            ))}
          </div>
        </div>
        <div>
          <h2>Description</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </Navbar>
  );
};

export async function getServerSideProps({ params }: any) {
  console.log(params);
  const project = await fetchProjectById(Number(params.id));
  return {
    props: {
      project,
    },
  };
}

export default ProjectDescription;
