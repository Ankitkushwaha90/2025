import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import ContentSection from "../components/ContentSection";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <SubNavbar />
        <ContentSection />
      </div>
    </div>
  );
};

export default Home;