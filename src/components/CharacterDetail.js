import React from "react";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <div className="character-detail-container">
      <Link to="/">Volver al inicio</Link>
      <section className="character-detail">
        <img className="image-detail" src={props.character.image} alt="" />
        <div>
          <h3 className="image-title">{props.character.name}</h3>
          <ul className="list-detail">
            <li className="li-detail">Status: {props.character.status}</li>
            <li className="li-detail">Species: {props.character.species}</li>
            <li className="li-detail">Origin: {props.character.origin}</li>
            <li className="li-detail">Episodes: {props.character.episode}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CharacterDetail;
