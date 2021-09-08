import styles from "./Tags.module.css";

const Tag = (props) => {
  return (
    <div className={styles["tags-container"]}>
      {props.tags.map((tag) => (
        <label key={tag} className={styles.tag}>
          {tag}
        </label>
      ))}
    </div>
  );
};

export default Tag;
