import '../Styles/AddressForm.css';
import {useContext, useState} from 'react';
import {InputContext} from '../App.jsx';
import locations from '../MockData/housingData.js';
import PropTypes from "prop-types";


/**
 * Represents the address form for selecting user location.
 * @param {function} props - give method setLocation for changing the user location
 * @returns the address form component
 */
function AddressForm(props) {

   
    const {setAddress} = useContext(InputContext);

    /**
     * Represent the users current input into the addres form field.
     */
    const [input, setInput] = useState("");


    /**
     * Handles when submission button is clicked.
     * Sets address to current input and display user address.
     */
    const handleSubmitClick = () => {
        if (input !== '') {
            setAddress(locations[input]);
        }else {
            setAddress('')
        }
        props.setLocationClicked(prev => !prev)
    }

    /**
     * Represent a pop-up input selections area for user to input Northeastern Housing Location.
     * @returns the input component for selecting hou
     */
    function renderUniversityHousingForm() {
        return (
            <div className='university-address-form'>
                <label>Housing Location</label>
                <input list="housing-locations" 
                       id="housing-location" 
                       placeholder="Type or select a location..." 
                       onChange={event => setInput(event.target.value)}></input>
                <datalist id="housing-locations">
                {       
                    Object.entries(locations).map(([building, address]) => {
                        return <option value={building} key={building+address}></option>
                    })
                }
                </datalist>
                <button onClick={handleSubmitClick}>Submit</button>

            </div>
        )
    }




    return (
        <>
            {renderUniversityHousingForm()}
        </>
        
    )

}

export default AddressForm;

AddressForm.propTypes = {
    setLocationClicked: PropTypes.func,

}