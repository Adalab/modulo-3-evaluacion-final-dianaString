import MovieSceneItem from './MovieSceneItem';

/* eslint-disable react/prop-types */
const MovieSceneList = ({ moviesList }) => {
    
    const renderMovieItems =()=> { 
        return moviesList.map((movie, index) => (
            <li key={index}>
                <MovieSceneItem movie={movie} />
            </li>
        ));
    }

    return (
        <>
            <ul>
                {renderMovieItems()}
            </ul>
        </>
    );
};

export default MovieSceneList;
