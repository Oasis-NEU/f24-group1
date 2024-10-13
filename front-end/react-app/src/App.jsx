import Header from "./Header"
import SearchBar from "./SearchBar"
import FilterBar from "./FilterBar"
import ResultsGrid from "./ResultsGrid";


import React, {createContext, useState} from 'react';


export const InputContext = createContext();

function App() {
   
    const [locationData, setLocationData] = useState({'address' : null, 'city': 'Boston', 'state' : 'Massachussets', 'zipCode' : '02115'});

    const [address, setAddress] = useState('');
  

    return (
      <InputContext.Provider value={{locationData, setLocationData, address, setAddress}}>
        <Header/>
        <SearchBar/>
        <FilterBar/>
        <ResultsGrid/>
      </InputContext.Provider>
    );
}

export default App
