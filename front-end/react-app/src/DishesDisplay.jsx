import DishCard from './DishCard';
import './Styles/DishesDisplay.css';
import defaultImage from './assets/logo.jpg'
import {useContext} from 'react';
import {InputContext} from "./App.jsx";

function DishesDisplay() {

    const {results} = useContext(InputContext);



    console.log("DishesDisplay Component Rendering");

    function renderResults() {
        if (results) {
            return (
                <div className="dishes-display">
                    {
                        results.map(result => {
                            return <DishCard key={result} result={result}/>
                        })
                    }
                </div>
            )
        }
    }


    return (
        <div className="dishes-display">
            {renderResults()}
        </div>
    );
}

export default DishesDisplay;