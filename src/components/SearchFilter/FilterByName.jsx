/* eslint-disable react/prop-types */

const FilterByName = ({ handleNameChange, nameFilter }) => {
    const handleInput = (ev) => {
        handleNameChange(ev.target.value);
    };

    return (
        <>
            <label htmlFor="name">Movie</label>
            <input
                type="text"
                name="movieName"
                id="movieName"
                onChange={handleInput}
                value={nameFilter}
            />
        </>
    )
}

export default FilterByName;