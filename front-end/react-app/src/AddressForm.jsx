import './Styles/AddressForm.css';

import React, {useContext, useState} from 'react';

import {InputContext} from './App.jsx';

import locations from './MockData/housingData.js';

function AddressForm(props) {

    const {locationData, setLocationData, address, setAddress} = useContext(InputContext);

    const [input, setInput] = useState("");

    function handleChange(event) {
        const {name, value} = event.target;
        setLocationData(prev => {
            const newLocationData = {...prev};
            newLocationData[name] = value;
            return newLocationData;
        })
    }

    const handleSubmitClick = () => {
        
        if (input !== '') {
            setAddress(locations[input]);
        }else {
            setAddress('')
        }
        props.setLocationClicked(prev => !prev)
        
        
    }

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

    function renderAddressForm() {
        return (
            <div className='address-form'>
                <form>
                <label>Street address</label>
                    <input key="address" name= "address" placeholder="Address" type="text" onChange={e => handleChange(e)} value={locationData['address']} />
                    <label>City*</label>
                    <input key="city" name= "city" placeholder="City" type="text" defaultValue={"Boston"} onChange={e => handleChange(e)} value={locationData['Boston']}/>
                    <label>State*</label>
                    <input key="state" name= "state" placeholder="State" type="text" defaultValue={"Massachusetts"} onChange={e => handleChange(e)} value={locationData['Massachusetts']}/>
                    <label>Zipcode</label>
                    <input key="zipcode" name= "zipCode" placeholder="Zipcode" type="text" defaultValue={"02115"} onChange={e => handleChange(e)} value={locationData['zipCode']}/>
                </form>
                <button>Submit</button>
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