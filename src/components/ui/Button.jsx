import './Button.css';
//Inside the DrinkButtons.jsx file, pass the drinkOne and drinkTwo props as parameters using the object destructuring syntax.
export const Button = ({text}) => {
  return <button className="button">{text}</button>;
};
