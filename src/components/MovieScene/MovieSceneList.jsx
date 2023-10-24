import MovieSceneItem from './MovieSceneItem';

/* eslint-disable react/prop-types */
const MovieSceneList = ({ scenesList, nameFilter}) => {

    if (scenesList.length === 0) {
        return (
          <p>The movie <span>{nameFilter}</span> is not found, try another one.</p>
        );
      }
    
    const renderMovieItems =()=> { 

        return scenesList.map((scene, index) => (
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
