import './Styles/DishCard.css';
import PropTypes from "prop-types";


function DishCard(props) {

    const {restaurant_name, dish_name, dish_image, dish_price} = props.result;

    console.log("got results "+dish_name);


    const getPrice = () => (dish_price === null) ? '$X' : '$' + dish_price;

    return (
        <div className="dish-card">
            <h2 className="dish-name">{dish_name}</h2>
            <img className="dish-image" src={dish_image}
                 alt={'https://via.placeholder.com/150x150.png?text=Image+Not+Found'}/>
            <h3 className='dish-price'>{getPrice()}</h3>
            <p className="restaurant-name">{restaurant_name}</p>
        </div>
    );
}

export default DishCard;

DishCard.propTypes = {
    result: PropTypes.object,
}