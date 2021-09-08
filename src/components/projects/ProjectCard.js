import styles from "./ProjectCard.module.css";
import Tags from "./Tags";

const ProjectCard = (props) => {
  const project = props.projectInfo;
  return (
    <div className={styles["project-container"]}>
      <div className={styles["project-img-container"]}>
        <img src={project.image} alt={project.title}></img>
      </div>
      <div className={styles["project-info"]}>
        <div className={styles["project-headers"]}>
          <h3>{project.title}</h3>
          <div className={styles["project-links"]}>
            <a href={project.demo} rel="noreferrer" target="_blank">
              <i class="uil uil-globe"></i>
            </a>
            <a href={project.github} rel="noreferrer" target="_blank">
              <i class="uil uil-github"></i>
            </a>
          </div>
        </div>
        <p>{project.about}</p>
        <Tags tags={project.tags} />
      </div>
    </div>
  );
};

export default ProjectCard;
