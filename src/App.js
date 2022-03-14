import "./App.css";
import cover from "./book_cover.jpeg";

function App() {
  return (
	<div className="App">
		<div className="content">
			<div className="navbar">
				<div className="navbar-item">Purchase</div>
				<div className="navbar-item">Contact</div>
			</div>
			<div className="cover-container">
				<img src={cover} alt="cover" className="cover-img"/>
				<div className="author">
					by Eleanor Amicucci
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
