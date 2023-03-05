import { Router, useRouter } from "next/router";
import React from "react";
import { Project } from "../../src/models";
import Stack from "./Stack";
import styles from "./styles.module.css";

interface ProjectCardProps {
  project: Project;
}

// Define the project card component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter()
  console.log(project);
  // Get the URL for the project's image
  const imageUrl = project.medias.find((media) => media.is_image);

  return (
    <div
    
      onClick={() => {
        router.push(`/Work/${project.id}`)
      }}
      className={`${styles.StackChipContainer} ${styles.Container}`}
      style={{ padding: 0,cursor:"pointer"  }}
    >
      {imageUrl && (
        <img
          src={
            imageUrl?.img ??
            "https://cdn.iconscout.com/icon/free/png-512/stackoverflow-2752065-2284882.png?f=avif&w=256"
          }
          className={styles.Image}
          alt={imageUrl.description_for_alt}
        />
      )}
      <div className={styles.Content}>
        <h2 className={styles.Title}>{project.name}</h2>
        {project.description && (
          <p className={styles.StartDate}>
            {project.description.substring(0, 200)}...
          </p>
        )}
        {project.start_date && (
          <p className={styles.StartDate}>{project.start_date}</p>
        )}
        {project.end_date && (
          <p className={styles.EndDate}>{project.end_date}</p>
        )}
        {project.completed && <p className={styles.Completed}>Completed</p>}
        <div className={styles.StackTiles}>
          {project.stacks.map((stack) => (
            <Stack
              key={stack.id}
              {...stack}
              selected={false}
              setStackSort={(e) => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
