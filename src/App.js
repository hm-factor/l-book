import "./App.css";
import cover from "./book_cover.jpeg";

function LinkPopup() {
	return (
		<div className="popup-container">
			<div className="popup-content links">
				<a href="">google</a>
				<a href="">amazon</a>
				<a href="">abe</a>
			</div>
		</div>
	)
}

function ContactPopup() {
	return (
		<div className="popup-container">
			
		</div>
	)
}

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
				</div>
			</div>
		</div>
	);
}

export default App;
