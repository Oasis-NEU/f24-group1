import FoodSuggestions from "./FoodSuggestions";
import Loader from "./Loader";
import {useContext} from "react";
import { InputContext } from './App';

/**
 * Represent the search results in a grid.
 * @returns the results commponent
 */
function ResultsGrid() {

    const {loading} = useContext(InputContext);

    // const fakeResults = [<ResultBox></ResultBox>,
    //                      <ResultBox></ResultBox>,
    //                      <ResultBox></ResultBox>,
    //                      <ResultBox></ResultBox>
    //                     ];

    function renderResult() {
        if (loading) {
            return <Loader/>
        }
        return <FoodSuggestions/>
    }

    return (
        <>
            {renderResult()}
        </>
    )
}

export default ResultsGrid;