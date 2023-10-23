/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import callToApi from '../services/api';
import MovieSceneList from './MoviesScene/MovieSceneList';
import '../styles/App.scss';

function App() {
	const LINK = "https://owen-wilson-wow-api.onrender.com/wows/random?results=50";

	const [moviesList, setMoviesList] = useState([]); 

	useEffect(() => {
		callToApi(LINK).then((moviesData) => {
			setMoviesList(moviesData);
			console.log(moviesData);
		});
	}, []);

	return (
		<div>
			<header>
				<h1>Owen Wilson's "Wow"</h1>
			</header>
			<main>
				<MovieSceneList moviesList={moviesList} />
			</main>
			<footer>
				<p>@dianastring 2023</p>
			</footer>
		</div>
	);
}

export default App;