/* eslint-disable react/prop-types */

const FilterByYear = ({ sortedUniqueYears, yearFilter, handleYearChange }) => {

    const optionYears = () => {
        return sortedUniqueYears.map((sortedYear, index) => (
            <option key={index} value={sortedYear}>{sortedYear}</option>
        ));
    }

    const handleSelect = (ev) => {
        handleYearChange(ev.target.value);
    };

    return (
        <>
            <label htmlFor="name">Year</label>
            <select name="year" value={yearFilter} onChange={handleSelect}>
                <option key='0' value='all'>-</option>
                {optionYears()}
            </select>
        </>
    )
}

export default FilterByYear;