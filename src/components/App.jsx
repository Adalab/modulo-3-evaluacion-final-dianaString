/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation, matchPath } from 'react-router';
import callToApi from '../services/api';
import MovieSceneList from './MoviesScene/MovieSceneList';
import MovieSceneDetail from './MoviesScene/MovieSceneDetail';
import Form from './SearchFilter/Form';
import '../styles/App.scss';

function App() {

	// Variables de estado
	const [sceneList, setSceneList] = useState([]);
	const [nameFilter, setNameFilter] = useState('');
	const [yearFilter, setYearFilter] = useState('');

	// Variables normales
	const LINK = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=50';
	const { pathname } = useLocation();
	//console.log('pathname', pathname)
	const routeData = matchPath('/scene/:id', pathname);
	//console.log('routeData', routeData)
	const sceneId = routeData !== null ? routeData.params.id : '';

	const sceneData = sceneList.find((scene) => scene.id === sceneId);

	const filteredScenes = sceneList
		.filter(scene => scene.name.toLowerCase().includes(nameFilter.toLowerCase()))
		.filter(scene => {
			if (yearFilter === '' || yearFilter === 'all') {
				return true;
			} else {
				return yearFilter === scene.year.toString();
			}
		});

	const sortedUniqueYears = [...new Set(sceneList
		.map(scene => scene.year))]
		.sort((a, b) => a - b);

	// API
	useEffect(() => {
		callToApi(LINK).then((scenesDataApi) => {
			setSceneList(scenesDataApi);
			/* console.log(scenesDataApi); */
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
				<a href=""><h1>Owen Wilson's "Wow"</h1></a>
				<Form
					nameFilter={nameFilter}
					handleNameChange={handleNameChange}
					yearFilter={yearFilter}
					sortedUniqueYears={sortedUniqueYears}
					handleYearChange={handleYearChange}
				/>
			</header>
			<main>
				<Routes>
					<Route
						path="/"
						element={
							<>
								{(filteredScenes.length !== 0) ? (<MovieSceneList sceneList={filteredScenes} />)
									: (<>
										<img src="https://placehold.co/400x600?text=Ooops!" alt="Ooops!" />
										<p>The movie <span>{nameFilter}</span> is not found, try another one.</p>
									</>)
								}
							</>
						}
					/>
					<Route
						path="/scene/:id"
						element={
							<>
								{sceneData ? (<MovieSceneDetail scene={sceneData} />) 
									: (<>
										<img src="https://placehold.co/400x600?text=Ooops!" alt="Ooops!" />
										<p>Scene not found</p>
									</>)
								}
								<Link to="/">Back</Link>
							</>
						}
					/>
				</Routes>
			</main>
			<footer>
				<p>@dianastring 2023</p>
			</footer>
		</div>
	);
}

export default App;
