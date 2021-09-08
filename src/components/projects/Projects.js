import styles from "./Projects.module.css";
import HeaderTitle from "../UI/HeaderTitle";
import React from "react";
import { ProjectInfo } from "../../data/projects";
import ProjectCard from "./ProjectCard";

// Replace with a container div component
const Projects = (props) => {
  return (
    <section className={styles["project-section"]}>
      <HeaderTitle />
      <div className={styles["projects-container"]}>
        {ProjectInfo.map((project) => (
          <ProjectCard key={project.id} projectInfo={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
