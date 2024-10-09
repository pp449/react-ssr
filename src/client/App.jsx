import React, { useEffect, useState } from 'react';
import MoviePage from './components/MoviePage';
import Footer from './components/Footer';

function App() {
	const [popularMovies, setPopularMovies] = useState(window.__INITIAL_DATA__.movies || []);

	const loadMovies = async () => {
		const data = await fetchPopularMovies();

		setPopularMovies(data.results);
	};

	useEffect(() => {
		if (window.__INITIAL_DATA__.movies) {
			setPopularMovies(window.__INITIAL_DATA__.movies);
		} else {
			loadMovies();
		}

		delete window.__INITIAL_DATA__.movies;
	}, []);

	return (
		<div>
			<MoviePage movies={popularMovies} />
			<Footer />
		</div>
	);
}

export default App;
