import './Styles/DishCard.css';
import PropTypes from "prop-types";


function DishCard(props) {

    const {restaurant_name, dish_name, dish_image, dish_price} = props.result;


    const getPrice = () => (dish_price === null || dish_price === 0) ? 'N/A' : '$' + dish_price;

    return (
        <div className="dish-card">
            <h2 className="dish-name">{dish_name}</h2>
            <img className="dish-image" src={dish_image}
                 alt={ `https://image.pollinations.ai/prompt/${dish_name}.png`}/>
            <h3 className='dish-price'>{getPrice()}</h3>
            <p className="restaurant-name">{restaurant_name}</p>
        </div>
    );
}

export default DishCard;

DishCard.propTypes = {
    result: PropTypes.object,
}