import { useRouter } from "next/router";
import React from "react";
import ProjectCard from "../../components/models/Projects";
import { Navbar } from "../../components/NavBar/Navbar";
import { fetchWorkExperienceById, fetchWorkExperiences } from "../../src/api";
import { WorkExperience } from "../../src/models";
import Markdown from "react-markdown";

const WorkExperienceDescription = ({
  workExperience,
}: {
  workExperience: WorkExperience;
}) => {
  return (
    <Navbar>
      <div className="flex justify-center items-center">
        <div className="p-6 w-full max-w-[85%]">
          <div className="mb-8">
            <div className="m-4 border border-green-400 rounded-lg p-6 shadow-lg shadow-green-400/50 transition-shadow duration-300 ease-out hover:shadow-green-400/75 bg-black flex flex-wrap flex-row justify-between items-center">
              <div className="flex items-center space-x-4">
                {workExperience.company.logo && (
                  <img
                    src={workExperience.company.logo}
                    alt={`${workExperience.company.name} logo`}
                    className="w-16 h-16 object-contain"
                  />
                )}
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {workExperience.position}
                  </h2>
                  <p className="text-green-400">
                    {workExperience.company.name}
                  </p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <p className="text-gray-300">
                  {workExperience.start_date} -{" "}
                  {workExperience.end_date || "Present"}
                </p>
                {workExperience.is_current && (
                  <span className="inline-block bg-green-500 text-black px-2 py-1 rounded text-sm mt-2">
                    Current Position
                  </span>
                )}
              </div>
            </div>
          </div>
          {workExperience.company.stock_indicator && (
            <div className="mb-8 mx-5">
              <div className=" flex py-5 flex-row w-[100%] justify-between rounded-lg shadow-lg transition-shadow duration-300 ease-out  flex-wrap  items-center">
                <p>Stock Indicator: {workExperience.company.stock_indicator}</p>
                <a
                  href={workExperience.company.main_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  Visit Company Website
                </a>
              </div>
            </div>
          )}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <div className="shadow-md">
              <Markdown className="markdown">{workExperience.description}</Markdown>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="flex flex-row flex-wrap flex-grow items-center justify-center">
              {workExperience.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export async function getStaticProps({ params }: any) {
  const workExperience = await fetchWorkExperienceById(Number(params.id));
  if (!workExperience) {
    return { notFound: true };
  }

  return {
    props: {
      workExperience,
    },
    revalidate: 180, // Revalidate every 30 minutes
  };
}

export async function getStaticPaths() {
  const workExperiences = await fetchWorkExperiences();

  return {
    paths: workExperiences.map((experience) => ({
      params: { id: [experience.id.toString()] },
    })),
    fallback: "blocking",
  };
}

export default WorkExperienceDescription;
