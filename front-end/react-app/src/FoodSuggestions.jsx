import './Styles/FoodSuggestions.css';

import {useContext} from 'react';
import { InputContext } from './App';

/**
 * Represents the food suggestion grid with 
 * clickable components for different cruisines.
 * @returns the food suggestion component
 */
function FoodSuggestions() {
    
    /**
     * Using the setSearch method for App component to update search value.
     */
    const {userQuery, setUserQuery, setHasEntered} = useContext(InputContext);

    /**
     * List of different cruisine options.
     */
    const options = ['Thai', 'Chinese', 'Sandwich', 'Mexican', 
                    'Greek', 'Kebab', 'Sushi', 'Seafood', 
                    'Italian', 'Indian', 'Korean', 'Vietnamese'];

    /**
     * Gets the image link with the given name.
     * @param {String} name the name of the cruisine
     * @returns the link (from ubereats) to the image
      */
    const getImageLink = (name) => {
        if (name == "Kebab") {
            `https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Halal.png`
        } else {
            `https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/${name}.png`
        }
    }

    /**
     * Handles when food button is clicked,
     * sets the search to the cruisine name of the button.
     * if clicked again search
     * @param {String} name 
     */
    const handleClick = (name) => {
        if (userQuery === name) {
            setHasEntered(true);
        } else {
            setUserQuery(name);
        }
    }

    /**
     * Represents an individual button for a cruisine 
     * that user can select to search for.
     * @param {String} name the name of the cruisine
     * @param {int} index the index in options
     * @returns the button component
     */
    function renderFoodButton(name, index) {
        const link = getImageLink(name);
        return (
            <button key={name+index} onClick={() => handleClick(name)}>
                <img src={link}></img>
                <span className='food-label'>{name}</span>
            </button>
        )
    }


    return (
        <div className='suggestions-container'>
            {
                options.map((name, index) => {
                    return renderFoodButton(name, index);
                })
            }
        </div>
    )
}

export default FoodSuggestions;