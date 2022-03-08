import React, { Component } from "react";

export default class Posts extends Component {
	state = {
		posts: [],
	};
	async componentDidMount() {
		const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
			(response) => response.json()
		);
		this.setState({ posts: data });
	}
	render() {
		return (
			<div>
				<h1>Posts</h1>
				{this.state.posts.map((post) => {
					return (
						<div key={post.id}>
							<h1>{post.title} </h1>
							<p>{post.body} </p>
						</div>
					);
				})}
			</div>
		);
	}
}
