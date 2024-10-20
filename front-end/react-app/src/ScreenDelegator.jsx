import React, { useContext } from 'react';
import {InputContext} from "./App.jsx";
import DishesDisplay from "./DishesDisplay.jsx";
import FoodSuggestions from "./FoodSuggestions.jsx";

function ScreenDelegator() {
    const {hasEntered} = useContext(InputContext);
    if(!hasEntered){
        return <FoodSuggestions/>
    } else {
        return <DishesDisplay/>
    }
}

export default ScreenDelegator;