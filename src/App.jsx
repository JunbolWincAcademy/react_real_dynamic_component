import './App.css'; // this is different
import { DrinkButtons } from './components/DrinkButtons'; //this is different DrinkButtons is not in the ui folder
//well I don't know why it was in the ui folder before

//import the dataset data
import { tea, coffee } from '../utils/data';
import { DrinkChoice } from './components/DrinkChoice'; 

export const App = () => {
  const greeting = 'Welcome to our cafe!';

  //In the App.jsx file, pass two props to the <DrinkButtons /> component: drinkOne with the tea object name and 
  //drinkTwo with the coffee object name.
  
//While writing the object names, auto import the objects, or manually import them.

//Create a new const userDrink and assign it the tea or coffee object.
const userDrink = tea;
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      <DrinkChoice drink={userDrink} /> {/* Passing userDrink as the drink prop */}
     { /*<DrinkButtons /> }{/*this was commented before remember to use {....} and only /*....  inside them  */}
    </div>
  );
};

//--------------OLD CODE------------------

// import React, { useState } from 'react'; // this line should always be there
// import reactLogo from './assets/react.svg';
// import { DrinkButtons } from './components/ui/DrinkButtons'; //I forgot to write the whole path to the file?*
// import './App.css';

// export const App = () => {
//   const welcomeGreeting = 'Welcome to our Coffee & Thee Corner!';

//   return (
//     <>
//       <div>
//         <img src="/assets/coffee_and_thee_logo_2.png" className="logo" alt="Coffee & Tee logo" />
//         <h1 className="mainTitle">{welcomeGreeting}</h1>
//         <DrinkButtons drinkOne={'Coffee'} drinkTwo={'Thee'} />
//         {/* <DrinkButtons /> */}
//       </div>
//     </>
//   );
// };
