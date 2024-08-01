import { useRouter } from "next/router";
import React from "react";
import { Project, WorkExperience } from "../../src/models";
import Stack from "./Stack";
import styles from "./styles.module.css";
import FocusOnMouseEnter from "../eye/FocusOnMouseEnter";

interface WorkExperienceCardProps {
  workExperience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  workExperience,
}) => {
  const router = useRouter();

  return (
    <FocusOnMouseEnter>
      <div
        onClick={() => {
          router.push(`/Experience/${workExperience.id}`);
        }}
        className={`${styles.StackChipContainer} ${styles.Container}`}
        style={{
          padding: 0,
          cursor: "pointer",
          marginTop: "50px",
          marginRight: "50px",
        }}
      >
        {workExperience.company.logo && (
          <img
            src={workExperience.company.logo}
            className={styles.Image}
            alt={`${workExperience.company.name} logo`}
          />
        )}
        <div className={styles.Content}>
          <h2 className={styles.Title}>
            {workExperience.position}
            {workExperience.is_current && (
              <i className={styles.Completed}>Current</i>
            )}
          </h2>
          <p className={styles.Company}>{workExperience.company.name}</p>
          <p className={styles.DateRange}>
            {workExperience.start_date} - {workExperience.end_date || "Present"}
          </p>
          {workExperience.description && (
            <p className={styles.Description}>
              {workExperience.description.substring(0, 150)}...
            </p>
          )}
          <div className={styles.ProjectTiles}>
            {workExperience.projects.slice(0, 3).map((project) => (
              <div key={project.id} className={styles.ProjectTile}>
                {project.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FocusOnMouseEnter>
  );
};

export default WorkExperienceCard;
