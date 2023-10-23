/* eslint-disable react/prop-types */
const MovieSceneItem = ({ movie }) => {
    return (
        <>
            <a className="card-a" href="#">
                <img src={movie.poster} alt={movie.name} />
                <p>{movie.name}</p>
                <p>{movie.year}</p>
                <p>{movie.phrase}</p>
            </a>
        </>
    );
};

export default MovieSceneItem;