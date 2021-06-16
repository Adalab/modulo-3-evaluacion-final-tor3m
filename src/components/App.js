
import React, { useState, useEffect } from 'react';
import getDataFromApi from "../services/getDataFromApi";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList"
// import ls from '../services/local-storage';


//console.log(getDataFromApi()); Este console.log devuelve una promesa

function App() {

const [characters, setCharacters] = useState([]);

useEffect (()=> {

   getDataFromApi().then(data => {setCharacters(data);
});
},
[]);


  return (
    <div className="App">

      <h1 className="title">
          <img className="title__image"src={logo} alt="RickandMorty" />
        </h1>
      <CharacterList characters={characters}/>
     
    </div>
  );
}

export default App;
