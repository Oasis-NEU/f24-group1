import PropTypes from "prop-types";

function Location(props) {

    return (
        <button className='set-location-button'
                onClick={() => props.setLocationClicked(l => !l)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
        </button>
        
    )
}

export default Location;

Location.propTypes = {
    setLocationClicked: PropTypes.func.isRequired
}