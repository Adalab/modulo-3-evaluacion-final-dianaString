/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import callToApi from '../services/api';
import MovieSceneList from './MoviesScene/MovieSceneList';
import Form from './SearchFilter/Form';
import '../styles/App.scss';

function App() {

	// Variables de estado
	const [moviesList, setMoviesList] = useState([]); 
	const [nameFilter, setNameFilter] = useState(''); 
	const [yearFilter, setYearFilter] = useState(''); 

	// Variables normales
	const LINK = "https://owen-wilson-wow-api.onrender.com/wows/random?results=50";

	const filteredMovies = moviesList
	.filter(movie => movie.name.toLowerCase().includes(nameFilter.toLowerCase()))
	.filter(movie => {
		if (yearFilter === '' || yearFilter === 'all'){
			return true;
		} else {
			return yearFilter === movie.year.toString();
		}
	});

	const sortedUniqueYears = [...new Set(moviesList
		.map(movie => movie.year))]
			.sort((a, b) => a - b);

	/* console.log(sortedUniqueYears); */

	// API
	useEffect(() => {
		callToApi(LINK).then((moviesData) => {
			setMoviesList(moviesData);
			/* console.log(moviesData); */
		});
	}, []);

	// Handlers
	const handleNameChange = (value) => {
		setNameFilter(value);
	};

	const handleYearChange = (value) => {
		setYearFilter(value);
	};

	// HTML
	return (
		<div>
			<header>
				<h1>Owen Wilson's "Wow"</h1>
				<Form 
					nameFilter={nameFilter}
					handleNameChange={handleNameChange}
					yearFilter={yearFilter}
					sortedUniqueYears={sortedUniqueYears}
					handleYearChange={handleYearChange}
				/>
			</header>
			<main>
				<MovieSceneList moviesList={filteredMovies} />
			</main>
			<footer>
				<p>@dianastring 2023</p>
			</footer>
		</div>
	);
}

export default App;
