import {useContext, useEffect} from 'react';
import {InputContext} from "./App.jsx";
import DishesDisplay from "./DishesDisplay.jsx";
import FoodSuggestions from "./FoodSuggestions.jsx";
import Loader from "./Loader.jsx";

function ScreenDelegator() {
    const {hasEntered, setHasEntered, results, setResults} = useContext(InputContext);


    useEffect(() => {
        console.log("Screen Delegator use effect - RESULTS CHANGED");
        console.log(results);
        if (results.length > 0) {
            setHasEntered(false);
        }
    },[results])

    const handleClearClick = () => {
        setResults([]);
    }

    if (results.length > 0) {

        return (
            <div className="results-section">
                <DishesDisplay/>
                <buttond id={'clear-button'} onClick={handleClearClick}>Clear</buttond>
            </div>
        )
    }

    if (hasEntered) {
        return <Loader/>
    }

    return <FoodSuggestions/>;


}

export default ScreenDelegator;