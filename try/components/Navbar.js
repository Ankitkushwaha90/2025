import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>शिव दर्शन</div>
      <ul className={styles.menu}>
        <li><a href="#tantra">तंत्र</a></li>
        <li><a href="#mantra">मंत्र</a></li>
        <li><a href="#yantra">यंत्र</a></li>
        <li><a href="#kundalini">कुंडलिनी</a></li>
        <li><a href="#kundali">कुंडली</a></li>
        <li className={styles.dropdown}>
          <a href="#ved">वेद ▼</a>
          <ul className={styles.dropdownMenu}>
            <li><a href="#rigved">ऋग्वेद</a></li>
            <li><a href="#yajurved">यजुर्वेद</a></li>
            <li><a href="#samved">सामवेद</a></li>
            <li><a href="#arthved">अथर्ववेद</a></li>
          </ul>
        </li>
        <li><a href="#stotras">स्तोत्र</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
