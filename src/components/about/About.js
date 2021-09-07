import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles["about-container"]}>
        <div className={styles["about-info"]}>
          Hello There, I'm Adam <br />I love learning about <br />
          Computer Science and Software Engineering
        </div>
        <div className={styles["about-photo"]}>
          <img
            src={require("../../assets/dude.png").default}
            className={styles["about-photo-img"]}
            alt=""
          />
        </div>
      </div>
      <div className={styles["about-resume"]}>
        <button>
          <i class="fi-rr-cloud-download"></i>
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default About;
