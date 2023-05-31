import React from "react";
import "./SearchInput.css";

export const SearchInput = ({ searchInputValue, handleChange, clearSearch }) => {
    return (
        <div className="searchbar-container">
            <div className="searchbar-inner-container">
                <input type="text" value={searchInputValue} placeholder="Search for movies here" onChange={handleChange} />
                {searchInputValue && (
                    <img
                        width="30"
                        onClick={clearSearch}
                        src="https://tse3.mm.bing.net/th?id=OIP.MvR8H4voNgN7Ej9WWRO8tgHaHa&pid=Api&P=0&h=180"
                        alt=""
                    />
                )}
            </div>
        </div>
    );
};
