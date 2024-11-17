import './Styles/DishCard.css';
import PropTypes from "prop-types";


function DishCard(props) {

    const {restaurant_name, dish_name, dish_image, dish_price} = props.result;


    const name = 'chinese';

    const getPrice = () => (dish_price === null) ? '$X' : '$' + dish_price;

    return (
        <div className="dish-card">
            <h2 className="dish-name">{dish_name}</h2>
            <img className="dish-image" src={dish_image}
                 alt={`https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/${name}.png`}/>
            <h3 className='dish-price'>{getPrice()}</h3>
            <p className="restaurant-name">{restaurant_name}</p>
        </div>
    );
}

export default DishCard;

DishCard.propTypes = {
    result: PropTypes.object,
}