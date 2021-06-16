import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
// import ls from '../services/local-storage';


function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("");

  useEffect(() => {
    if (characters.length === 0) {
      getDataFromApi().then((data) => {
        const orderAlpha = data.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        setCharacters(data);
      });
    }
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
      setFilterSpecie(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.species
        .toLowerCase()
        .includes(filterSpecie.toLowerCase());
    });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    console.log('Router props', props.match.params.characterId, foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p>Personaje no encontrada</p>;
    }
  };

  return (
    <Switch>
      <div className="App">
        <h1 className="title">
          <img className="title__image" src={logo} alt="RickandMorty" />
        </h1>
        <Route exact path="/">
          <Filters
            filterName={filterName}
            filterSpecie={filterSpecie}
            handleFilter={handleFilter}
          />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </div>
    </Switch>
  );
}

export default App;
