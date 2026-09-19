import React from 'react'
import searchIcon from '../../images/search.png'

const Search = ({ searchTerm, setSearchTerm }) => {

  return (
    <div className="search">
        <img src={searchIcon} alt="searchIcon" className="search-icon" />
        <input
          type="text"
          placeholder="Search through my library of movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>  
  )
}

export default Search