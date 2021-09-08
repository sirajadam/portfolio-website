import styles from "./Container.module.css";

const Container = (props) => {
  return (
    <section className={`${styles.conatiner} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Container;
