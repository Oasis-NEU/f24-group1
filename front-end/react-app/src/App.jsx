import Header from "./Header"
import SearchBar from "./SearchBar"
import ResultsGrid from "./ResultsGrid";
import {createContext, useState} from 'react';
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

    const [loading, setLoading] = useState(false);

    return (
      <InputContext.Provider value={{ address, setAddress, 
                                      search : search, setSearch : setSearch, 
                                      loading : loading, setLoading : setLoading}}>
        <Header/>
        <ResultsGrid/>
        <SearchBar/>
      </InputContext.Provider>
    );
}

export default App
