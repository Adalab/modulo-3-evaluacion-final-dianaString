/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MovieSceneItem = ({ scene }) => {

    return (
        <>
            <Link to={`/scene/${scene.id}`} className="card" >
                <img src={scene.poster ? scene.poster : "https://placehold.co/400x600?text=Ooops!"} alt={scene.name} />
                <div>
                    <h3>{scene.name}</h3>
                    <p>({scene.year})</p>
                </div>
                <div className="div">
                    <h2>"{scene.phrase}"</h2>
                </div>
            </Link>
        </>
    );
};

export default MovieSceneItem;