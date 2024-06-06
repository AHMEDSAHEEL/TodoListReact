import React from "react"
import { FaPlus } from "react-icons/fa"

export const SearchItems = ({search,setSearch}) => {
  return (
<form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
  <label htmlFor="search">Search</label>
  <input
    id="search"
    type="text"
    role="searchBox"
    placeholder="Search item"
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    />
 

</form>
  )
}

export default SearchItems