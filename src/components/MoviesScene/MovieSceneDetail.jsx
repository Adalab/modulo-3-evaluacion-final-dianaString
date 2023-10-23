/* eslint-disable react/prop-types */

const MovieSceneDetail = ({ scene }) => {

    return (
        <>
            <div>
                <img src={scene.poster} alt={scene.name} />
                <h3>{scene.name}</h3>
                <h2>{scene.phrase}</h2>
                <p>{scene.director}</p>
                <audio controls>
                    <source src={scene.audio} type="audio/mpeg"/>
                        Audio not available.
                </audio>
            </div>
        </>
    );
};

export default MovieSceneDetail;