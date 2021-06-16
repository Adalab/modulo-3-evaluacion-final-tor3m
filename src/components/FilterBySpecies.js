import React from 'react';

function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };

  return (
    <>
      <label htmlFor="species">
        <input
          className="input-text-species"
          type="text"
          name="species"
          id="species"
          value={props.filterSpecie}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default FilterBySpecies;