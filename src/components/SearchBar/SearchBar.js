import React , { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
    const [ search, setSearch ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ sort, setSort ] = useState(null);

    const handleSortClick = (sortByOptionValue) => {
        setSort(sortByOptionValue);
    };

    const handleSearchChange = ({ target }) => {
        setSearch(target.value);
    }
    const handleLocationChange = ({ target }) => {
        setLocation(target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(`Searching Yelp with ${search}, ${location}, ${sort}`);
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            const isActive = sort === sortByOptionValue;
            return <li className={isActive ? styles.active : ''} onClick={() => handleSortClick(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        });
    };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input onChange={handleSearchChange} placeholder="Search Businesses" />
                <input onChange={handleLocationChange} placeholder="Where?" />
            </div>
            <div className={styles.SearchBarSubmit}>
                <a onClick={handleSearch}>Let's Go</a>
            </div>
        </div>
    );
};

export default SearchBar;
