import Header from "./Header"
import SearchBar from "./SearchBar"
import ResultsGrid from "./ResultsGrid";
import React, {createContext, useState} from 'react';
import Dietary from "./Filters/Dietary";
import Price from "./Filters/Price";
import Rating from "./Filters/Rating";
import FoodSuggestions from "./FoodSuggestions";

/**
 * Context for addres data
 */
export const InputContext = createContext();

/**
 * Represent everything on the screen.
 * @returns the main app component
 */
function App() {

    /**
     * Represent the users current address.
     */
    const [address, setAddress] = useState('');
  
    const [search, setSearch] = useState('');

    return (
      <InputContext.Provider value={{ address, setAddress, search : search, setSearch : setSearch}}>
        <Header/>
        <ResultsGrid/>
        
        <SearchBar/>
        
      </InputContext.Provider>
    );
}

export default App
