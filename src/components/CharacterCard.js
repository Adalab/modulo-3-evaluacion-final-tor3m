import { Link } from 'react-router-dom';
function CharacterCard(props) {
  return (
    <li>
      <Link to={`/character/${props.character.id}`}>
      <article className="">
        <img src={props.character.image} alt="" />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
      </article>
      </Link>
    </li>
  );

}

export default CharacterCard;
