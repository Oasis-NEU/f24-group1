import Header from "./Header"
import SearchBar from "./InputComponents/SearchBar.jsx"
import {createContext, useState} from 'react';
import FoodSuggestions from "./FoodSuggestions.jsx";
;

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
      <InputContext.Provider value={{ address, setAddress, 
                                      search : search, setSearch : setSearch}}>
        <Header/>
        <FoodSuggestions/>
        <SearchBar/>
      </InputContext.Provider>
    );
}

export default App
