/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation, matchPath } from 'react-router';
import callToApi from '../services/api';
import ls from "../services/localStorage";
import MovieSceneList from './MovieScene/MovieSceneList';
import MovieSceneDetail from './MovieScene/MovieSceneDetail';
import Form from './SearchFilter/Form';
import '../styles/App.scss';

function App() {

	// Variables de estado
	const [scenesList, setScenesList] = useState(ls.get("scenes", []));
	const [nameFilter, setNameFilter] = useState(ls.get('search', ''));
	const [yearFilter, setYearFilter] = useState('');

	// Variables normales
	const API_LINK = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=50';

	const { pathname } = useLocation();
	const routeData = matchPath('/scene/:id', pathname);
	const sceneId = routeData !== null ? routeData.params.id : '';
	const sceneData = scenesList.find((scene) => scene.id === sceneId);

	const filteredScenes = scenesList
		.filter(scene => scene.name.toLowerCase().includes(nameFilter.toLowerCase()))
		.filter(scene => {
			if (yearFilter === '' || yearFilter === 'all') {
				return true;
			} else {
				return yearFilter === scene.year.toString();
			}
		});

	const sortedUniqueYears = [...new Set(scenesList
		.map(scene => scene.year))]
		.sort((a, b) => a - b);

	// API
	useEffect(() => {
		if(scenesList.length === 0) {
			callToApi(API_LINK).then((scenesDataApi) => {
				setScenesList(scenesDataApi);
			});
		}
	}, [scenesList.length]);

	useEffect(() => {
		ls.set('scenes', scenesList);
	}, [scenesList]);

	// Handlers
	const handleNameChange = (value) => {
		setNameFilter(value);
		ls.set('search', value);
	};

	const handleYearChange = (value) => {
		setYearFilter(value);
	};

	// HTML
	return (
		<div>
			<header className="header">
				<a href=""><h1>Owen Wilson's <span>"Wows"</span></h1></a>
				<Form
					nameFilter={nameFilter}
					handleNameChange={handleNameChange}
					yearFilter={yearFilter}
					sortedUniqueYears={sortedUniqueYears}
					handleYearChange={handleYearChange}
				/>
			</header>
			<main className="main">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<MovieSceneList scenesList={filteredScenes} nameFilter={nameFilter}/>
							</>
						}
					/>
					<Route
						path="/scene/:id"
						element={
							<>
								{sceneData !== undefined ? (<MovieSceneDetail scene={sceneData} />) 
									: (<>
										<img src="https://placehold.co/400x600?text=Ooops!" alt="Ooops!" />
										<p>Scene not found</p>
									</>)
								}
								<Link to="/" className="backBtn">Back</Link>
							</>
						}
					/>
				</Routes>
			</main>
			<footer className="footer">
				<p><a href="https://github.com/dianaString">@dianastring</a> 2023</p>
			</footer>
		</div>
	);
}

export default App;
