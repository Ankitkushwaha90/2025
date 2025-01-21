"use client"

import { useState, useEffect } from "react";
import styles from "../styles/ContentSection.module.css";

const ContentSection = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("./content.ts")
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <main className={styles.content}>
      {content.map((item) => (
        <div key={item.id} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </main>
  );
};

export default ContentSection;
