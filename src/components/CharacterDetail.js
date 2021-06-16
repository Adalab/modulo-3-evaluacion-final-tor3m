
import React from 'react';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  return (
    <div className="">
      <Link to="/">Volver al inicio</Link>
      <section>
        <img className="" src={props.character.image} alt="" />
        <h3 className="">{props.character.name}</h3>
        <ul className="">
          <li>Status: {props.character.status}</li>
          <li>Species: {props.character.species}</li>
          <li>Origin: {props.character.origin}</li>
          <li>Episodes: {props.character.episode}</li>
        </ul>
      </section>
    </div>
  );
}

export default CharacterDetail;
