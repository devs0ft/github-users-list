import React, { useEffect, useState } from "react";
import spinner from "../../assets/images/spinner.png";

const url = "https://api.chucknorris.io/jokes/random";

function Jokes() {
	const [jokes, setJokes] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getJokes = () => {
		setIsLoading(true);
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setJokes(data);
				console.log(data);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getJokes();
	}, []);
	return (
		<section>
			<div className="j-container">
				<h1>Random Jokes Generator</h1>

				{isLoading ? (
					<div style={{ textAlign: "center" }}>
						<img src={spinner} alt="loading" />
					</div>
				) : (
					<div className="texts">
						<h4>Joke id: {jokes.id}</h4>
						<p>{jokes.value}</p>
						<small>{jokes.created_at}</small>
					</div>
				)}

				<button type="submit" onClick={getJokes}>
					Generate Joke
				</button>
			</div>
		</section>
	);
}

export default Jokes;
