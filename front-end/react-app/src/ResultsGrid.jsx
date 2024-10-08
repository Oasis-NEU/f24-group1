import RestarantData from "./RestaurantData";
import results from "./MockData/mockData";

function ResultsGrid() {
    
    
    


    return (
        <div className="results-grid">
            {
                results.map(data => {
                    return <RestarantData data={data}></RestarantData>
                })
            }
        </div>
    )
}

export default ResultsGrid;