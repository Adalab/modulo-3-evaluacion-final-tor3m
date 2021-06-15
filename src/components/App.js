import "../stylesheets/App.scss";
import FilterByName from "./FilterByName"
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";

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
  );
}

export default App;
