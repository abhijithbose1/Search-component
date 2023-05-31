import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { SearchList } from "../SearchList/SearchList";
import "./Search.css";

export const Search = () => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchList, setSearchList] = useState([]);

    const API_URL =
        "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

    const handleChange = (event) => {
        setSearchInputValue(event.target.value);
    };

    const clearSearch = () => {
        setSearchInputValue("");
        setSearchList([]);
        console.log("Search Cleared");
    };

    const fetchMovieList = async () => {
        const response = await axios(API_URL, {
            params: {
                query: searchInputValue,
            },
        });
        setSearchList(response.data.results);
    };

    //debouncing
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetchMovieList();
        }, 500);

        return () => {
            clearTimeout(timeOut);
        };
    }, [searchInputValue]);

    // console.log(searchList);

    return (
        <div className="search-main-container">
            <div className="search-heading-container">
                <img
                    width="25"
                    style={{ objectFit: "contain" }}
                    src="https://vectorified.com/images/white-magnifying-glass-icon-19.png"
                    alt=""
                />
                <h1>Looking for a movie?</h1>
            </div>
            <SearchInput searchInputValue={searchInputValue} handleChange={handleChange} clearSearch={clearSearch} />
            <SearchList searchList={searchList} />
        </div>
    );
};
