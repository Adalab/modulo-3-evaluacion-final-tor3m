import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterElements = props.characters.map((character) => {
    return (
      <li className="characters-list__item" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section className="characters">
      {characterElements.length === 0 ? (
        "No hemos encontrado tu personaje, vuelve a intertarlo"
      ) : (
        <ul className="characters-list"> {characterElements}</ul>
      )}
    </section>
  );
}

export default CharacterList;
