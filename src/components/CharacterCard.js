import { Link } from "react-router-dom";
import React from "react";

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="">
        <img src={props.character.image} alt="" />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
      </article>
    </Link>
  );
}

export default CharacterCard;
