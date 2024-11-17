import '../Styles/AddressForm.css';
import {useContext, useState} from 'react';
import {InputContext} from '../App.jsx';
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






    return (
        <>

        </>
        
    )

}

export default AddressForm;

AddressForm.propTypes = {
    setLocationClicked: PropTypes.func,

}