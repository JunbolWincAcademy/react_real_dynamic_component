import './TextInput.css'
import { useState } from 'react';

export const TextInput = () => {
    const [searchField, setSearchTerm] = useState(''); // Initialize with an empty string
    const handleInputChange = (event) => {//by default all eventhandlers or event objects will pass to the function'parameter the value of its user
        // in this case <input>'s value which is whatever the user types and save it as the word "event" which is just a placeholder
        // the same word will be use next to get its value:event.target.value
        setSearchTerm(event.target.value);
    };
    
    return (
        <input className='text-input'
            
            // its makes a cycle so it renders continuously the state of the component
            onChange={handleInputChange} // Pass the function reference without calling it,
            // that is why it doesn't have the ( )
        />
    );
};



