import DishCard from './DishCard';
import './Styles/DishesDisplay.css';
import defaultImage from './assets/logo.jpg'


function DishesDisplay() {

  return (
    <div className="dishes-display">
      <DishCard 
        imageSrc={defaultImage}
        dishName="Pasta Carbonara"
        restaurantName="Italiano Bistro"
      />
      <DishCard 
        imageSrc={defaultImage}
        dishName="Sushi Platter"
        restaurantName="Tokyo Delight"
      />
      <DishCard 
        imageSrc={defaultImage}
        dishName="Burger Deluxe"
        restaurantName="American Diner"
      />
    </div>
  );
}

export default DishesDisplay;