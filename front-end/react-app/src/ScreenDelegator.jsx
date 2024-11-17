import {useContext, useEffect} from 'react';
import {InputContext} from "./App.jsx";
import DishesDisplay from "./DishesDisplay.jsx";
import FoodSuggestions from "./FoodSuggestions.jsx";
import Loader from "./Loader.jsx";

function ScreenDelegator() {
    const {hasEntered, setHasEntered, results} = useContext(InputContext);


    useEffect(() => {
        console.log("Screen Delegator use effect - RESULTS CHANGED");
        console.log(results);
        if (results.length == 4) {
            setHasEntered(false);
        }
    },[results])



    if (results.length == 4) {
        return <DishesDisplay/>
    }

    if (hasEntered) {
        return <Loader/>
    }

    return <FoodSuggestions/>;


}

export default ScreenDelegator;