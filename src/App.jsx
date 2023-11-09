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
  const [allCharacters, setAllCharacters] = useState([]);
  const [gryffindorCharacters, setGryffindorCharacters] = useState([]);
  const [slytherinCharacters, setSlytherinCharacters] = useState([]);
  const [hufflepuffCharacters, setHufflepuffCharacters] = useState([]);
  const [ravenclawCharacters, setRavenclawCharacters] = useState([]);
  

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

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await response.json();
        setAllCharacters(data);
      } catch (error) {
        console.error("Error fetching all characters:", error);
      }
    };

    const fetchGryffindorCharacters = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters/house/Gryffindor");
        const data = await response.json();
        setGryffindorCharacters(data);
      } catch (error) {
        console.error("Error fetching Gryffindor characters:", error);
      }
    };

    const fetchSlytherincharacters = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters/house/Slytherin");
        const data = await response.json();
        setSlytherinCharacters(data);
      } catch (error) {
        console.error("Error fetching Gryffindor characters:", error);
      }
    };


    const fetchRavenclawCharacters = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters/house/Ravenclaw");
        const data = await response.json();
        setRavenclawCharacters(data);
      } catch (error) {
        console.error("Error fetching Gryffindor characters:", error);
      }
    };

    const fetchHufflepuffCharacters = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters/house/Hufflepuff");
        const data = await response.json();
        setHufflepuffCharacters(data);
      } catch (error) {
        console.error("Error fetching Gryffindor characters:", error);
      }
    };

    
    fetchAllCharacters();
    fetchGryffindorCharacters();
    fetchSlytherincharacters();
    fetchRavenclawCharacters();
    fetchHufflepuffCharacters();
  }, []);

  return (
    <div className="App">
      <Parallax bgImage={initial} strength={300}>
        <div className={styles.page}>
          <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <img src={scrolled ? logoWhite : logoBlack} alt="Logo Harry Potter" className={styles.logo} />
            <div className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}></div>
            <SearchBar />
          </div>
          <div className={styles.title}>Harry</div>
          <div className={styles.cards}>
            {allCharacters.map((character) => (
              <Card key={character.id} name={character.name} image={character.image} />
            ))}
          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>
      <Parallax bgImage={grifinoria} strength={200}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}>
            {gryffindorCharacters.map((character) => (
              <Card key={character.id} name={character.name} image={character.image} />
            ))}
          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>

      <Parallax bgImage={sonserina} strength={100}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}>
          {slytherinCharacters.map((character) => (
              <Card key={character.id} name={character.name} image={character.image} />
            ))}
          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>

      <Parallax bgImage={lufalufa} strength={100}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}>
          {hufflepuffCharacters.map((character) => (
              <Card key={character.id} name={character.name} image={character.image} />
            ))}
          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>

      <Parallax bgImage={corvinal} strength={100}>
        <div className={styles.page}>
          <div className={styles.title}></div>
          <div className={styles.cards}>
          {ravenclawCharacters.map((character) => (
              <Card key={character.id} name={character.name} image={character.image} />
            ))}
          </div>
          <div className={styles.footer}></div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
