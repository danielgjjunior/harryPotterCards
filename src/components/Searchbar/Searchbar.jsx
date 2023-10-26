import React, { useState } from "react";
import style from "./Searchbar.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gif from "../../assets/gif/search.gif";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <form className={style.searchComponent}>
      
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className={style.searchbar}
        placeholder="Digite aqui um personagem. Ex: Harry Potter "
      />
      <button type="submit" className={style.searchIcon}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <img src={gif} alt="Gif de busca" className={style.gif} />
    </form>
  );
}

export default SearchBar;
