import React from "react";
import {Search} from  'semantic-ui-react'

const SearchBar = ( props) => {
    return (
        <Search results={props.searchResults.map(project => project.name)} onSearchChange={props.changeHandler}
                name="searchTerm" value={props.searchTerm} placeholder="Search..."/>
    )
}
 export default SearchBar;