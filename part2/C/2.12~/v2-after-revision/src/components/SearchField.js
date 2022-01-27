import React from 'react'

const SearchField = ({handleSearchInput}) => {
    return (
        <div>
            search by name
            <input type="text" onChange={handleSearchInput} />
        </div>
    )
}

export default SearchField