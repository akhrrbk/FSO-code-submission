import React from "react";

const Filter = ({searchByName}) => {

    return (
        <div>
            <label htmlFor="search">search by name</label>
            <input type="search" id='search' onChange={searchByName} />
      </div>
    )
}

export default Filter