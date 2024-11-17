import './Styles/DishCard.css';
import PropTypes from "prop-types";


function DishCard(props) {

    const {restaurant_name, dish_name, dish_image, dish_price} = props.result;

    console.log("got results "+dish_name);


    return (
        <div className="dish-card">
            <img className="dish-image" src={dish_image} alt={'https://via.placeholder.com/150x150.png?text=Image+Not+Found'} />
            <h2 className="dish-name">{dish_name}</h2>

            <p className="restaurant-name">{restaurant_name}</p>
        </div>
    );
}

export default DishCard;

DishCard.propTypes = {
  result: PropTypes.object,
}