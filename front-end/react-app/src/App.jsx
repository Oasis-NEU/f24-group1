import SearchBar from "./SearchBar"

import Header from "./Header"
import FilterBar from "./FilterBar"
import React, {createContext, useState} from 'react';
import ResultsGrid from "./ResultsGrid";

export const FilterContext = createContext();

function App() {
    const [filters, setFilters] = useState([{"Culture" : null}, {"Dietary": null}, {"Distance": null}, {"MealType": null},{"Price": null}, {"Rating": null}]);
    
    return (
      <FilterContext.Provider value={{filters, setFilters}}>
        <Header/>
        <SearchBar></SearchBar>
        <FilterBar></FilterBar>
        <ResultsGrid></ResultsGrid>
      </FilterContext.Provider>
    )


}

export default App
