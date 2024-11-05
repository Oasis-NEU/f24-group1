import Header from "./Header"
import SearchBar from "./InputComponents/SearchBar.jsx"
import {createContext, useState} from 'react';
import ScreenDelegator from "./ScreenDelegator.jsx";
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
  
    const [userQuery, setUserQuery] = useState('');
    const [hasEntered, setHasEntered] = useState(false);

    const [results, setResults] = useState([]);



    return (
        <>
        <Header/>
        <InputContext.Provider value={{ address, setAddress,
                                      userQuery, setUserQuery, hasEntered, setHasEntered, setResults}}>
            <ScreenDelegator results={results} />
            <SearchBar/>
        </InputContext.Provider>
        </>
    );
}

export default App
