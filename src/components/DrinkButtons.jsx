import './DrinkButtons.css';
import { Button } from './ui/Button';
//Inside the DrinkButtons.jsx file, pass the drinkOne and drinkTwo props as parameters using the object destructuring syntax.
export const DrinkButtons = ({ drinkOne, drinkTwo, onDrinkSelect }) => {
  return (
    <>
      <h2>Would you like tea or coffee?</h2>
      <div className="button-group">
        <button onClick={() => onDrinkSelect(drinkOne)}>{drinkOne}</button>
        <button onClick={() => onDrinkSelect(drinkTwo)}>{drinkTwo}</button>
      </div>
    </>
  );
};


