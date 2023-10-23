/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import callToApi from '../services/api';
import MovieSceneList from './MoviesScene/MovieSceneList';
import Form from './SearchFilter/Form';
import '../styles/App.scss';

function App() {
	const LINK = "https://owen-wilson-wow-api.onrender.com/wows/random?results=50";

	const [moviesList, setMoviesList] = useState([]); 
	const [filteredMovie, setfilteredMovie] = useState(''); 

	useEffect(() => {
		callToApi(LINK).then((moviesData) => {
			setMoviesList(moviesData);
			console.log(moviesData);
		});
	}, []);

	const handleNameChange = (value) => {
		setfilteredMovie(value);
	};


    const filteredMovies = moviesList
			.filter(movie => movie.name.toLowerCase().includes(filteredMovie.toLowerCase()));

	return (
		<div>
			<header>
				<h1>Owen Wilson's "Wow"</h1>
				<Form 
					filteredMovie={filteredMovie}
					handleNameChange={handleNameChange}
				/>
			</header>
			<main>
				<MovieSceneList moviesList={filteredMovies} /> {/* moviesList */}
			</main>
			<footer>
				<p>@dianastring 2023</p>
			</footer>
		</div>
	);
}

export default App;
