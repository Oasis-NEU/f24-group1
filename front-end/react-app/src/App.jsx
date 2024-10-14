import Header from "./Header"
import SearchBar from "./SearchBar"
import ResultsGrid from "./ResultsGrid";
import React, {createContext, useState} from 'react';
import Dietary from "./Filters/Dietary";
import Price from "./Filters/Price";
import Rating from "./Filters/Rating";

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
        <ResultsGrid/>
        <SearchBar/>
        <h1>Testing Filter Components will appear down here</h1>
        <h2>Dietary Component</h2>
        <Dietary/>
        <h2>Price Component</h2>
        <Price/>
        <h2>Rating Component</h2>
        <Rating/>
      </InputContext.Provider>
    );
}

export default App
