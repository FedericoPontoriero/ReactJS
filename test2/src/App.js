import "./App.css";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=922abb6f";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		setMovies(data.Search);
	};
	useEffect(() => {
		searchMovies("Spiderman");
	}, []);

	return (
		<div className="App">
			<h1>MyMovieApp</h1>
			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img src={logo} alt="Search" onClick={() => searchMovies(searchTerm)} />
			</div>
			{movies?.length ? (
				<div className="container">
					{movies.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No Movies found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
// 922abb6f
