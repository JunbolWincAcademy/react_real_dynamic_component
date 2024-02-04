import React from 'react';
import { TextInput } from "./ui/TextInput";
export const DrinkSearch = ({ onSearchSubmit }) => {// you can translate this as DrinkSearch = ({ handleSearchSubmit }) so this parameter was defined in App.
    return (
        <>
            <label>Search for drinks:</label>
             <TextInput onSearchSubmit={onSearchSubmit} /> {/*I don't understand why onSearchSubmit is receiving it self */}
             {/* the first onSearchSubmit the one your are going to use as a prop in TextInput , is like your are defining it here*/}
             {/* the second onSearchSubmit the one on the prop of DrinkSearch */}

        </>
    );      
};

//------EXPLANATION OF THE MEFCHANICS OF THE DATA FLOW

/* Having trouble to understand this statement:    <TextInput onSearchSubmit={onSearchSubmit} /> was important to understand the dataflow of React
In React there a bunch of rules that are bit different than vanilla Javascript, but there also common conventions. You need to know and understand them
in order to understand how the pieces of the mechanism is assembled. 

•	Prop Naming in JSX Tags: When you see <ComponentName propName={value} /> in JSX, propName is always the name of a prop that the 
component (ComponentName) is expecting to receive. The {value} is what you're passing to that prop. This {value} can be anything: a string,
 a number, a boolean, an object, or even a function.
•	First Instance (Prop Name): The first occurrence of onSearchSubmit (or any prop name) within the JSX tag of a component is
 the name of the prop as defined or expected by the component being used. This tells the component, "I am providing you with a piece 
 of data or a callback function, and I will refer to it by this name."
•	Second Instance (Value Being Passed): The {onSearchSubmit} in {onSearchSubmit} is the actual value being passed to the prop. 
In the context of <TextInput onSearchSubmit={onSearchSubmit} />, it means, "Take the onSearchSubmit function I (the DrinkSearch component)
 received from my parent (App) and pass it down to TextInput as its onSearchSubmit prop." In <DrinkSearch onSearchSubmit={handleSearchSubmit} />, 
 it translates to, "Pass the handleSearchSubmit function defined in App to DrinkSearch as the onSearchSubmit prop."

 This pattern allows React developers to clearly and succinctly pass down props from parent to child components, maintaining a consistent
 naming convention throughout the component tree. It’s especially helpful for understanding the flow of data and callbacks in larger, more 
 complex applications. */
