/* eslint-disable react/prop-types */
const MovieSceneItem = ({ movie }) => {
    return (
        <>
            <a className="card-a" href="#">
                <img src={movie.poster} alt={movie.name} />
                <h3>{movie.name}</h3>
                <p>{movie.year}</p>
                <h2>{movie.phrase}</h2>
            </a>
        </>
    );
};

export default MovieSceneItem;