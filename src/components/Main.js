import Filters from "./Filters";
import CharacterList from "./CharacterList";
import logo from "../images/logo.png";

function Main(props) {
  return (
    <main className="">
      <h1 className="title">
        <img className="title__image" src={logo} alt="RickandMorty" />
      </h1>
      <Filters
        filterName={props.filterName}
        filterSpecie={props.filterSpecie}
        handleFilter={props.handleFilter}
      />
      <CharacterList characters={props.characters} />
    </main>
  );
}






export default Main;
