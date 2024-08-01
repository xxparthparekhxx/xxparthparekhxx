import { Router, useRouter } from "next/router";
import React from "react";
import { Project } from "../../src/models";
import Stack from "./Stack";
import styles from "./styles.module.css";
import FocusOnMouseEnter from "../eye/FocusOnMouseEnter";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const imageUrl = project.medias.find((media) => media.is_logo);

  return (
    <FocusOnMouseEnter>
      <div
        onClick={() => {
          router.push(`/Work/${project.id}`);
        }}
        className={`${styles.StackChipContainer} ${styles.Container}`}
        style={{
          padding: 0,
          cursor: "pointer",
          marginTop: "50px",
          marginRight: "50px",
        }}
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
          <h2 className={styles.Title}>
            {project.name}
            {project.completed && <i className={styles.Completed}>Completed</i>}
          </h2>
          {project.description && (
            <p className={styles.Description}>
              {project.description.substring(0, 150)}...
            </p>
          )}
          <p className={styles.DateRange}>
            {project.start_date} - {project.end_date || 'Present'}
          </p>
          {project.company && (
            <p className={styles.Company}>
              Company: {project.company.name}
            </p>
          )}
          <div className={styles.StackTiles}>
            {project.stacks.slice(0, 4).map((stack) => (
              <Stack
                key={stack.id}
                {...stack}
                selected={false}
                iconOnly={true}
                setStackSort={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </FocusOnMouseEnter>
  );
};
export default ProjectCard;