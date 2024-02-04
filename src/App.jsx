import './App.css'; // this is different
import { DrinkButtons } from './components/DrinkButtons'; //this is different DrinkButtons is not in the ui folder
//well I don't know why it was in the ui folder before

//import the dataset data
import { tea, coffee } from '../utils/data';
import { DrinkChoice } from './components/DrinkChoice';
import { useState } from 'react';
import { DrinkSearch } from './components/DrinkSearch';

export const App = () => {
  const greeting = 'Welcome to our cafe!';

  //In the App.jsx file, pass two props to the <DrinkButtons /> component: drinkOne with the tea object name and
  //drinkTwo with the coffee object name.

  //While writing the object names, auto import the objects, or manually import them.

  //Create a new  userDrink state

  const [userDrink, setUserDrink] = useState(null);

  //-----handleDrinkSelection function

  const handleDrinkSelection = (drink) => {
    console.log('Selected drink:', drink); // Add this line to debug
    setUserDrink(drink);
  };

  //-----handleSearchSubmit function

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.toLowerCase() === 'tea') {
      setUserDrink(tea);
    } else if (searchQuery.toLowerCase() === 'coffee') {
      setUserDrink(coffee);
    } else {
      // Handle invalid input
      alert('Sorry, we only have tea and coffee.');
    }
  };

  return (
    <div className="App">
      {userDrink ? (
        // Only render DrinkChoice if a drink is selected
        <DrinkChoice drink={userDrink} />
      ) : (
        // if not render the following:
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea} drinkTwo={coffee} onDrinkSelect={handleDrinkSelection} />
          {/* <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} onDrinkSelect={handleDrinkSelection} /> */}
          {userDrink && <p>You have selected: {userDrink}</p>}
          <DrinkSearch onSearchSubmit={handleSearchSubmit} />
        </>
      )}
    </div>
  );
};

// NOTES:

// The use of parentheses () is particularly emphasized in scenarios involving conditional rendering with the ternary operator in JSX,
// especially when the expressions span multiple lines or are complex.
