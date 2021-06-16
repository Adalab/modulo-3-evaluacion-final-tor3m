import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  return (
    <section>
      <form className="">
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecies
          filterSpecie={props.filterSpecie}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
