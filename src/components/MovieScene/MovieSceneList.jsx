import MovieSceneItem from './MovieSceneItem';

/* eslint-disable react/prop-types */
const MovieSceneList = ({ sceneList }) => {
    
    const renderMovieItems =()=> { 

        return sceneList.map((scene, index) => (
            <li key={index}>
                <MovieSceneItem scene={scene} />
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
