/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const MovieSceneDetail = ({ scene }) => {

    if (scene === undefined) {
        return (
            <>
                <img src="https://placehold.co/400x600?text=Ooops!" alt="Ooops!" />
                <p>Scene not found</p>
            </>
        )    
    }

    return (
        <>
            <div>
                <article className="detail">
                    <img src={scene.poster} alt={scene.name} />
                    <div className="detail__div">
                        <h3>{scene.name}</h3>
                        <div className="div">
                            <h2>"{scene.phrase}"</h2>
                        </div>
                        <p>Director: {scene.director}</p>
                        <audio controls>
                            <source src={scene.audio} type="audio/mpeg"/>
                                Audio not available.
                        </audio>
                    </div>
                </article>
            </div>
        </>
    );
};

export default MovieSceneDetail;