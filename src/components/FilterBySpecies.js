import React from "react";

function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };

  return (
    <div className="filter-specie">
      <label  htmlFor="species"></label>
      <input
        className="input-text-species"
        type="text"
        name="species"
        id="species"
        placeholder="  Filtrar por especie"
        value={props.filterSpecie}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterBySpecies;
