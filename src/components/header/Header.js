import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <h2>Adam Siraj</h2>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
      </ul>
    </nav>
  );
};

export default Header;
