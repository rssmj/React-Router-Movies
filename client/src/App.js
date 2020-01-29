import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		<div>
			<SavedList list={savedList} />
			<Route exact path='/'>
				<MovieList />
			</Route>
			<Route path='/movies/:id'>
				<Movie add={addToSavedList} />
			</Route>
		</div>
	);
};

export default App;
