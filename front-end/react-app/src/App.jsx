import Header from "./Header"
import SearchBar from "./SearchBar"
import FilterBar from "./FilterBar"
import ResultsGrid from "./ResultsGrid";


import React, {createContext, useState} from 'react';

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
  

    return (
      <InputContext.Provider value={{ address, setAddress}}>
        <Header/>
        <SearchBar/>
        <FilterBar/>
        <ResultsGrid/>
      </InputContext.Provider>
    );
}

export default App
