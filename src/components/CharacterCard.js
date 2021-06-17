import { Link } from "react-router-dom";
import React from "react";

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="characters-list__item-data">
        <img className="character__image" src={props.character.image} alt="" />
        <h3 className="character__title">{props.character.name}</h3>
        <p className="character__specie">{props.character.species}</p>
      </article>
    </Link>
  );
}

export default CharacterCard;
