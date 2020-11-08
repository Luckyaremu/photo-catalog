import React from "react"
import catSearch from '../styles/CatSearch.css';

const CatSearch = ({handleGetRequest}) => {
    return (
        <div className="CatSearch">
            <form onSubmit={handleGetRequest} className="CatSearch_form">
                <input type="text" autoComplete="off" name="searchValue" placeholder="Search for cats.........."/>        
                <button>Search</button>
            </form>
        </div>
    )
}

export default CatSearch