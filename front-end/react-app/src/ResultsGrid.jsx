import FoodSuggestions from "./FoodSuggestions";
import Loader from "./Loader";
import ResultBox from "./ResultBox";
import React, {useState} from 'react';

/**
 * Represent the search results in a grid.
 * @returns the results commponent
 */
function ResultsGrid() {

    const [loading, setLoading] = useState(false);

    const fakeResults = [<ResultBox></ResultBox>,
                         <ResultBox></ResultBox>,
                         <ResultBox></ResultBox>,
                         <ResultBox></ResultBox>
                        ];

    function renderResult() {
        if (loading) {
            return <Loader/>
        }
        return <FoodSuggestions/>
        return (
            <div className="results-grid">
            {
                fakeResults.map(result => {
                    return result;
                })
            }
            </div>
        )
    }

    return (
        <>
            {renderResult()}
        </>
    )
}

export default ResultsGrid;