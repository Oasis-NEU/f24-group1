import StarRating from "./StarRating";


function RestarantData(props) {

    const {name, rating, menu, image} = props.data;


    function renderHeader() {
        return (
            <div className="restaurant-header">
                <h1>{name}</h1>
                <StarRating rating={rating}/>
            </div>
        )
    }

    function renderMenu() {
        return (
            <div className="menu-container"> 
                
                {
                    menu.map(item => {
                        return <p>{item}</p>
                    })
                }  
                
            </div>
        )
    }

    return (
        <div className="result-container">
            {renderHeader()}
            {renderMenu()}
            <button>Order Now</button>
        </div>
    )
}


export default RestarantData;