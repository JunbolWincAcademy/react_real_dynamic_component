import './DrinkButtons.css';

export const DrinkButtons = () => {
  return (
    <>
      <h2>Would you like tea or coffee?</h2>
      <div className="button-group">
        <button className="button">Tea</button>
        <button className="button">Coffee</button>
      </div>
    </>
  );
};

//---------------- this was the old code

// export const DrinkButtons = (props) => {// here props is a parameter

// export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
//   // here props is a parameter
//   // before it was no parameter
//   const Choose = 'Hello!, would you like coffee or thee?';
//   // const tea = 'Tea';
//   // const coffee = 'Coffee';

//   return (
//     <>
//       <div className="DrinkButtons">
//         <h2>{Choose}</h2>
//       </div>
//       <div className="button-group">
//         <button className="btn_thee">{drinkOne}</button>
//         <button className="btn_coffee">{drinkTwo}</button>

//       </div>
//     </>
//     //     {/* <button className="btn_thee">{props.drinkOne}</button>
//     //     <button className="btn_coffee">{props.drinkTwo}</button> */}

//     //     {/* <button className="btn_thee"><p className= "btn_color">{tea}</p></button>
//     //     <button className="btn_coffee"><p className= "btn_color">{coffee}</p></button> */}
//     //   </div>
//     // </>
//   );
// };
