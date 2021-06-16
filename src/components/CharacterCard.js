function CharacterCard(props) {
  return (
    <div className="App">
    
        <img src={props.character.image} alt="" />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
     
    </div>
  );
}

export default CharacterCard;
