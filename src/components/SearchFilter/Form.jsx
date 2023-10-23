/* eslint-disable react/prop-types */
import FilterByName from "./FilterByName";

const Form = ({ filteredMovie, handleNameChange }) => {
    return (
        <form onSubmit={(ev) => ev.preventDefault}>
            <FilterByName
                filteredMovie={filteredMovie}
                handleNameChange={handleNameChange}
            />
        </form>
    );
};

export default Form;
