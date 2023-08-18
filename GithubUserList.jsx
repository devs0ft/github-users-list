import React, { useEffect, useState } from "react";
import jacket from "../../assets/images/jacket.jpg";

const url = "https://api.github.com/users";

function GithubUserList() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const getUsers = async () => {
		setIsLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		setUsers(data);
		setIsLoading(false);
		console.log(data);
	};

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div className="container">
			<div className="text">
				<h1>GitHub Users</h1>
				<div className="underline"></div>
			</div>

			<div className="row">
				<div className="cards">
					{isLoading ? (
						<h2>Loading ....</h2>
					) : (
						users.map((user) => {
							const { login, id, avatar_url, html_url } = user;
							return (
								<div className="card" key={id}>
									<img src={avatar_url} alt={login} width={80} height={80} />
									<span>
										<h4>{login}</h4>
										<a href="#">{html_url}</a>
									</span>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}

export default GithubUserList;
