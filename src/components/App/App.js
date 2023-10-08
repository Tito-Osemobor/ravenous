import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const Businesses = [
    {
        imageSrc:
            "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
        name: "Ma78T78rginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90,
    },
    {
        imageSrc:
            "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
        name: "Mar8TginOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90,
    },
    {
        imageSrc:
            "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
        name: "87 Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90,
    },
    {
        imageSrc:
            "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
        name: "MarginOtt87o Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90,
    },
    {
        imageSrc:
            "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
        name: "Marg7878inOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90,
    },
    {
        imageSrc:
            "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
        name: "MargiT78nOtto Pizzeria",
        address: "1010 Paddington Way",
        city: "Bordertown",
        state: "NY",
        zipCode: "10101",
        category: "Italian",
        rating: 4.5,
        reviewCount: 90,
    }
]

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={Businesses}/>
    </div>
  );
};

export default App;
