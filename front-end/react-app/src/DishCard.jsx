import './Styles/DishCard.css';
import PropTypes from "prop-types";


function DishCard(props) {
  return (
    <div className="dish-card">
      <img src={props.imageSrc} alt={props.dishName} className="dish-image" />
      <h2 className="dish-name">{props.dishName}</h2>
      <p className="restaurant-name">{props.restaurantName}</p>
    </div>
  );
}

export default DishCard;

DishCard.propTypes = {
    imageSrc: PropTypes.string,
    dishName: PropTypes.string,
    restaurantName: PropTypes.string,
}