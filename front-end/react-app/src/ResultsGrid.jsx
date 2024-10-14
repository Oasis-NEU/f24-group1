import ResultBox from "./ResultBox";


/**
 * Represent the search results in a grid.
 * @returns the results commponent
 */
function ResultsGrid() {
    return (
        <div className="results-grid">
            <ResultBox></ResultBox>
            <ResultBox></ResultBox>
            <ResultBox></ResultBox>
            <ResultBox></ResultBox>
        </div>
    )
}

export default ResultsGrid;