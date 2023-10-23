/* eslint-disable react/prop-types */
import FilterByName from './FilterByName';
import FilterByYear from './FilterByYear';

const Form = ({ nameFilter, handleNameChange, yearFilter, sortedUniqueYears, handleYearChange }) => {

    return (
        <form onSubmit={(ev) => ev.preventDefault}>
            <FilterByName
                nameFilter={nameFilter}
                handleNameChange={handleNameChange}
            />
            <FilterByYear
                sortedUniqueYears={sortedUniqueYears}
                yearFilter={yearFilter}
                handleYearChange={handleYearChange}
            />
        </form>
    )
}

export default Form;