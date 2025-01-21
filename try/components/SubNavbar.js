import styles from "../styles/SubNavbar.module.css";

const SubNavbar = () => {
  return (
    <aside className={styles.subNavbar}>
      <h2>हिंदू धर्म स्तोत्र</h2>
      <ul>
        <li><a href="#shivastotram">शिव स्तोत्र</a></li>
        <li><a href="#vishnustotram">विष्णु स्तोत्र</a></li>
        <li><a href="#durgastotram">दुर्गा स्तोत्र</a></li>
        <li><a href="#ganeshastotram">गणेश स्तोत्र</a></li>
        <li><a href="#hanumanstotram">हनुमान स्तोत्र</a></li>
      </ul>
    </aside>
  );
};

export default SubNavbar;
