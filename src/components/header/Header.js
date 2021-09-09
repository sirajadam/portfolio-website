import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <h2>Adam Siraj</h2>
      <ul>
        <li>
          <a
            href="https://www.github.com/sirajadam"
            rel="noreferrer"
            target="_blank"
            className={styles["nav-link"]}
          >
            <i class="uil uil-github"></i>
            <span className={styles["nav-text"]}> GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/adam-s-39261b212/"
            rel="noreferrer"
            target="_blank"
            className={styles["nav-link"]}
          >
            <i class="uil uil-linkedin"></i>
            <span className={styles["nav-text"]}>LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
