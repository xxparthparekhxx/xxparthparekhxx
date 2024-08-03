import Head from "next/head";
import { Navbar } from "../components/NavBar/Navbar";
import { Hero } from "../components/work/Hero";
import StackView from "../components/models/Stack";
import ProjectCard from "../components/models/Projects";
import {
  fetchProjects,
  fetchProjectsByStack,
  fetchStacks,
  fetchWorkExperiences,
} from "../src/api";
import { useEffect, useState } from "react";
import { Project, Stack, WorkExperience } from "../src/models";
import { LeftRight } from "../components/eye/CurveFunctions";
import WorkExperienceCard from "../components/models/WorkExperience";

export default function Home({
  stacks,
  allProjects,
  experiences,
}: {
  stacks: Stack[];
  allProjects: Project[];
  experiences: WorkExperience[];
}) {
  const [SelectedStack, setSelectedStack] = useState<number | null>(null);
  const [Projects, setProjects] = useState(allProjects);
  const [ProjectsLoading, setProjectsLoading] = useState(false);

  useEffect(() => {
    const x = async () => {
      if (SelectedStack != null) {
        setProjectsLoading(true);
        setProjects([]);
        setProjects(await fetchProjectsByStack(SelectedStack));
        setProjectsLoading(false);
      } else {
        setProjectsLoading(true);
        setProjects(await fetchProjects());
        setProjectsLoading(false);
      }
    };
    x();
  }, [SelectedStack]);
  function getReversed(arr:any[]) {
    return  arr.reverse()
  }
  

  return (
    <Navbar>
      <Hero />

      <div
        style={{
          padding: "2em",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            marginBottom: "1em",
            fontSize: "2em",
          }}
        >
          Tech I Work With
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {SelectedStack != null && (
            <StackView
              iconOnly={false}
              key={1}
              {...{
                name: "clear",
                id: 0,
                img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-round-icon.png",
              }}
              setStackSort={(e) => setSelectedStack(null)}
              selected={SelectedStack === null}
            ></StackView>
          )}
          {stacks.map((e: Stack) => (
            <StackView
              iconOnly={false}
              key={e.id}
              {...e}
              setStackSort={(e) => setSelectedStack(e)}
              selected={e.id === SelectedStack}
            ></StackView>
          ))}
        </div>
        <h2
          style={{
            margin: "1em",
            fontSize: "2em",
          }}
        >
          My Projects
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            flexBasis: "center",
          }}
        >
          {Projects.map((e) => (
            <ProjectCard key={e.id} project={e}></ProjectCard>
          ))}
        </div>
        {ProjectsLoading && (
          <div>
            <LeftRight></LeftRight>
          </div>
        )}

        {Projects.length == 0 && !ProjectsLoading && (
          <div>No Projects Found</div>
        )}
        <h2
          style={{
            margin: "1em",
            fontSize: "2em",
          }}
        >
          Work Experience
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            flexBasis: "center",
          }}
        >
          {experiences.map((e) => (
            <WorkExperienceCard
              key={e.id}
              workExperience={e}
            ></WorkExperienceCard>
          ))}
        </div>

        {experiences.length == 0 && <div>Still learning</div>}
      </div>
    </Navbar>
  );
}

export async function getStaticProps(context: any) {
  const [Stacks, allProjects, experiences] = await Promise.all([
    fetchStacks(),
    fetchProjects(),
    fetchWorkExperiences(),
  ]);

  return {
    props: {
      stacks: Stacks,
      allProjects,
      experiences,
    },
    revalidate: 1800, // Enable ISR with a revalidation time of 60 seconds
  };
}
