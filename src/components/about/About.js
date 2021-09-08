import styles from "./About.module.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const About = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Computer Science",
        "Go",
        "Software Engineering",
        "TypeScript",
        "Web Development",
        "React",
      ],
    });
  }, []);
  return (
    <section className={styles.about}>
      <div className={styles["about-container"]}>
        <div className={styles["about-info"]}>
          Hey, I'm Adam <br />I love learning about <br />
          <span ref={textRef}></span>
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
        <a href={require("../../assets/dude.png").default} download="dude.png">
          <i class="fi-rr-cloud-download"></i>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
