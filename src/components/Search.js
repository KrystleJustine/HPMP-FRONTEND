import React from 'react'

const Search = (props) => {
    return (
        <div>
            <input onChange={props.changeHandler} name="searchTerm" value={props.searchTerm} />
        </div>
    )
}

export default Search