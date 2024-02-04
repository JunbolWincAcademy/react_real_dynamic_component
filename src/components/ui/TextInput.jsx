
import './TextInput.css'; // Correctly include the CSS file for styles
import { useState } from 'react';

export const TextInput = ({ onSearchSubmit }) => { // Make sure to receive onSearchSubmit as a prop
    const [searchField, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearchSubmit(searchField); // Call the passed in onSearchSubmit function with the current search term
            //by calling onSearchSubmit you are actually calling handleSearchSubmit = (searchQuery) in App.jsx and its parameter searchQuery is now searchField = tea
        }
    };

    return (
        <input
            className='text-input'
            placeholder="Search for a drink" // Added placeholder for clarity
            value={searchField}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress} // Add this to handle enter key press
        />
    );
};

