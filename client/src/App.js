import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		<div>
			<SavedList list={savedList} />
			<Route exact path="/" component={MovieList} />
			<Route
				exact
				path="/movies/:id"
				component={Movie}
				addToSavedList={addToSavedList}
			/>
			<div>Replace this Div with your Routes</div>
		</div>
	);
};

export default App;
