import React, { useState, useEffect } from "react";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
// import ls from '../services/local-storage';

//console.log(getDataFromApi()); Este console.log devuelve una promesa

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("");
  
useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === 'species') {
      setFilterSpecie(data.value);
    }
  };

  const filteredCharacters = characters
  .filter(character => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
  .filter(character => {
      return character.species.toLowerCase().includes(filterSpecie.toLowerCase());
    });


  return (
    <div className="App">
      <h1 className="title">
        <img className="title__image" src={logo} alt="RickandMorty" />
      </h1>
      <CharacterList characters={filteredCharacters} />
      <Filters filterName={filterName} filterSpecie={filterSpecie} handleFilter={handleFilter}/>
      <CharacterDetail characters={filteredCharacters} />
    </div>
  );
}

export default App;
