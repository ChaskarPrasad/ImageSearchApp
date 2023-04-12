import { useState } from "react";
import './SearchBar.css'
function SearchBar({ onSubmit }) {
    const[searchInput,setSearchInput] = useState('')
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        onSubmit(searchInput);
    }
    const handleChange = (e)=>{
        e.preventDefault()
        setSearchInput(e.target.value.replace(/a-z/,''));
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <input value={searchInput} onChange={handleChange}/>
            </form>
        </div>
    )
};
export default SearchBar;