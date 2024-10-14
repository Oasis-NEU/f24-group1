import React, {useState, useContext} from 'react';
import Location from './Location';
import './Styles/SearchBar.css';
import AddressForm from './AddressForm';

import { InputContext } from './App';


/**
 * Represent the search bar for the user to type in.
 * Also includes the addres form button and dropdown 
 * for the user to enter their location.
 * @returns the Search bar and addres dropdown components
 */
function SearchBar() {

    /**
     * Taking address value from main App Component.
     */
    const {address} = useContext(InputContext)

    /**
     * Represent the users current input into the search bar.
     */
    const [input, setInput] = useState();

    /**
     * Represent is the location button was clicked.
     */
    const [locationClicked, setLocationClicked] = useState(false);


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            input.setInput(e.value)
        }
    }

    /**
     * Displays the users current address
     * @returns the users current address or 'No valid selected' if not found
     */
    function renderAddress() {
        if (address !== '') {
            const message = `Current Address: ${address}`;
            return <p id='address'>{message}</p>
        }
        return  <p id='invalid-address'>*No valid address selected*</p>
    }

    /**
     * Dislays the addres components:
     * @returns the address if locationClicked then display the current address
     *          otherwise dropdown the address form for user to input
     */
    function renderAddressSection() {
        if (locationClicked) {
            return (
                renderAddress()
            )
        }
        return <AddressForm setLocationClicked={setLocationClicked}/>
    }

    
    function renderSearchButton() {
        return (
            <button></button>
        )
    }
   
    
    return (
        <>
            <div className="search-bar">
                <Location setLocationClicked={setLocationClicked}/>
                <input
                    value={input}
                    onKeyDown={(event) => handleKeyDown(event)}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search here...">
                    
                </input>
                
            </div>
            {renderAddressSection()}
        </>
    )
}

export default SearchBar;