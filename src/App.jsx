import React from "react";
import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import SearchBar from "../src/components/Searchbar/Searchbar.jsx";

import initial from "./assets/img/initial.jpg";
import grifinoria from "./assets/img/grifinoria.jpg";
import sonserina from "./assets/img/sonserina.jpg";
import lufalufa from "./assets/img/lufalufa.jpg";
import corvinal from "./assets/img/corvinal.jpg";
import styles from "./App.module.css";
import logoWhite from "./assets/img/logoWhite.png";
import logoBlack from "./assets/img/logoBlack.png";
import Card from "./components/Card/Card.jsx";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="App">
      <Parallax bgImage={initial} strength={300}>
        <div className={styles.page}>
          <div className={styles.header}>
            <div
              className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            >
              <img
                src={scrolled ? logoWhite : logoBlack}
                alt="Logo Harry Potter"
                className={styles.logo}
              />
              <div
                className={`${styles.nav} ${scrolled ? styles.navScrolled : ""
                  }`}
              ></div>
              <SearchBar />
            </div>
          </div>
          <div className={styles.title}>

            Harry
          </div>
          <div className={styles.cards}>

            <Card />
            <Card />
            <Card />
            <Card />

          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>
      <Parallax bgImage={grifinoria} strength={200}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}>

          <Card />
            <Card />
            <Card />
            <Card />

          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>
      <Parallax bgImage={sonserina} strength={100}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}>



          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>

      <Parallax bgImage={lufalufa} strength={100}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}></div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>

      <Parallax bgImage={corvinal} strength={100}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}></div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
