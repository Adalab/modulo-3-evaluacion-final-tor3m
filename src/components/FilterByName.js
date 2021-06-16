import React from 'react';

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <label className="" htmlFor="name">
        <input
          className="input-text-name"
          type="text"
          name="name"
          id="name"
          value={props.filterName}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default FilterByName;
