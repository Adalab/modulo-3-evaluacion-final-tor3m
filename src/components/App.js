import "../stylesheets/App.scss";
import React from "react";
import FilterByName from "./FilterByName"
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";
import logo from "../images/logo.png";

//console.log(getDataFromApi()); Este console.log devuelve una promesa

getDataFromApi()

function App() {

return (
    <div className="App">
      <main>
        <img src={logo} alt="RickandMorty" />
        <p>HELLO WORLDDD!</p>
      <FilterByName/>
      <CharacterList/>
      <CharacterCard/>
      <CharacterDetail/>
      </main>
    </div>
  )
};

export default App;
