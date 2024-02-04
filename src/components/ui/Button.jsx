import './Button.css';
//Inside the DrinkButtons.jsx file, pass the drinkOne and drinkTwo props as parameters using the object destructuring syntax.
// Define the Button component with expected props
export const Button = ({ text, onClick }) => {
  return <button className="button" onClick={onClick}>{text}</button>;
};

