import "../stylesheets/App.scss";
import React from "react";
import FilterByName from "./FilterByName"
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";

//console.log(getDataFromApi()); Este console.log devuelve una promesa

getDataFromApi()

function App() {

return (
    <div className="App">
      <main>
        HELLO WORLDDD!
      <FilterByName/>
      <CharacterList/>
      <CharacterCard/>
      <CharacterDetail/>
      </main>
    </div>
  )
};

export default App;
