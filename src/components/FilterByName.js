import React from "react";

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <div className="filter-name">
      <label htmlFor="name"> </label>
      <input
        className="input-text-name"
        type="text"
        name="name"
        id="name"
        placeholder="  Filtrar por nombre"
        value={props.filterName}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterByName;
