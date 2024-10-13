import React, {useState, useContext} from 'react';
import Location from './Location';
import './Styles/SearchBar.css';
import AddressForm from './AddressForm';

import { InputContext } from './App';
import EditButton from './EditButton';

function SearchBar() {

    const {address} = useContext(InputContext)

    const [input, setInput] = useState();

    const [locationClicked, setLocationClicked] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            input.setInput(e.value)
        }
    }

    function renderAddress() {
        if (address !== '') {
            const message = `Current Address: ${address}`;
            return <p id='address'>{message}</p>
        }
        return  <p id='invalid-address'>*No valid address selected*</p>
    }

    function renderAddressSection() {
        if (locationClicked) {
            return (
                renderAddress()
            )
        }
        return <AddressForm setLocationClicked={setLocationClicked}/>
    }

   
    return (
        <>
            <div className="search-bar">
                <input
                    value={input}
                    onKeyDown={(event) => handleKeyDown(event)}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search here...">
                </input>
                <Location setLocationClicked={setLocationClicked}
                />
            </div>
            {renderAddressSection()}
        </>
    )
}

export default SearchBar;