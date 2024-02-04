import { TextInput } from "./ui/TextInput";
export const DrinkSearch = ({ onSearchSubmit }) => {
    return (
        <>
            <label>Search for drinks:</label>
            <TextInput onSearchSubmit={onSearchSubmit} />
        </>
    );      
};
