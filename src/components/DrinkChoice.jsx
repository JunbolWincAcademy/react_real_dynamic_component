
export const DrinkChoice = ({ drink }) => {
    return (
        <>
          <p>{drink.name}</p> {/* Displaying the drink's name */}
          {/* Displaying the drink's image */}
          <img src={drink.imgUrl} alt={drink.alt} style={{ width: '100px', height: '100px' }} />
          {    /* a bit explanation about how style works in jsx: the style attribute in JSX expects a javascript object.
          and because in JSX you need curly brackets to embed a javascript expression which all the style statement
          that is the reason of the {{...}}    */}
          {/* Additional paragraph */}
          <p>Your {drink.name} will be ready in a few minutes.</p>
        </>
    );
};

