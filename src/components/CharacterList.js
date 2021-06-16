import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterElements = props.characters.map((character) => {
    return (
      <li className="list" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul className=""> {characterElements}</ul> 
    </section>
  );
}

export default CharacterList;
