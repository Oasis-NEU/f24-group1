import {useState, useContext, useEffect} from 'react';
import Location from '../Location.jsx';
import '../Styles/SearchBar.css';
import AddressForm from './AddressForm.jsx';

import { InputContext } from '../App.jsx';
import fetchResults from "../searchResultsAPI.js";


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
    const {address, userQuery, setUserQuery, hasEntered, setHasEntered, setResults, results} = useContext(InputContext)

    /**
     * Represent is the location button was clicked.
     */
    const [locationClicked, setLocationClicked] = useState(true);

    useEffect(() => {
        async function updateResults() {
            try {
                console.log('FETCHING RESULTS FROM BACKEND');
                const tempResults = (await fetchResults(userQuery)) || [];
                setResults(tempResults);
            } catch (error){
                console.log(`Error fetching results: ${error}`)
            }
        }
        if (hasEntered) {
            updateResults();
        }

    },[hasEntered]);

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter' && userQuery.trim() !== '') { // don't search if only whitespace
            setHasEntered(true);
        }
    }


    /**
     * Don't update user search bar if user has only pressed space.
     * @param event
     */
    const handleChange = (event) => {
        if(event.target.value.trim() !== '' || userQuery.length > event.target.value.length) {
            setUserQuery(event.target.value)
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
     * Displays the address components:
     * @returns the address if locationClicked then display the current address
     *          otherwise dropdown the address form for user to input
     */
    function renderAddressSection() {
        if (locationClicked) {
            return renderAddress();
        }
        return <AddressForm setLocationClicked={setLocationClicked}/>
    }

   
    
    return (
        <>
            <div className="search-bar">
                <Location setLocationClicked={setLocationClicked}/>
                <input
                    value={userQuery}
                    onKeyDown={(event) => handleKeyDown(event)}
                    onChange={(e) => handleChange(e)}
                    placeholder="Search here...">
                </input>

                
            </div>
            {renderAddressSection()}
        </>
    )
}

export default SearchBar;