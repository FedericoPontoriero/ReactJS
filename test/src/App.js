import React from "react";
import "./App.css";

/* function Helloworld(props) {
	console.log(props);
	return (
		<div id="hello">
			<h3>{props.subtitle}</h3>
			{props.mytext}
		</div>
	);
} */

// Con class

class Helloworld extends React.Component {
	state = {
		show: true,
	};

	toggleShow = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		if (this.state.show) {
			return (
				<div id="hello">
					<h3>{this.props.subtitle}</h3>
					{this.props.mytext}
					<button onClick={this.toggleShow}>Toggle Show</button>
				</div>
			);
		} else {
			return (
				<h1>
					No hay elementos
					<button onClick={this.toggleShow}>Toggle Show</button>
				</h1>
			);
		}
	}
}

// Con Arrow Functions

// const App = () => <div>This is my component: <Helloworld /></div>

// Con class

// class App extends React.Component {
//  render() {
//    return <div>This is my component <Helloworld /></div>
//  }
// }

function App() {
	return (
		<div>
			This is my component:
			<Helloworld mytext="Hello Fede" subtitle="lorem ipsum" />
			<Helloworld mytext="Hola Mundo" subtitle="asd" />
			<Helloworld mytext="Hi!" subtitle="ñalsdkl" />
		</div>
	);
}

export default App;
