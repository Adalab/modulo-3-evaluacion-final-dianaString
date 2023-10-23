/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MovieSceneItem = ({ scene }) => {

    return (
        <>
            <Link to={`/scene/${scene.id}`} className="card" >
                <img src={scene.poster} alt={scene.name} />
                <h3>{scene.name}</h3>
                <p>{scene.year}</p>
                <h2>{scene.phrase}</h2>
            </Link>
        </>
    );
};

export default MovieSceneItem;