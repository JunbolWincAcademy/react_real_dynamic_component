import './App.css';// this is different
import { DrinkButtons } from './components/DrinkButtons';//this is different DrinkButtons is not in the ui folder
//well I dont know why it was in the ui folder before

export const App = () => {
  const greeting = 'Welcome to our cafe!';

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButtons /> {/*this was commented before remember to use {....} and only /*....  inside them  */} 
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

