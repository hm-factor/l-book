import "./App.css";
import cover from "./book_cover.jpeg";
import { useState } from 'react';
import Popup from './components/Popup.jsx';

import { init } from "@emailjs/browser";
init("FN0kgaiyoK4JrPv1h");

function App() {
	let [popup, setPopup] = useState(false)
	let [hover, setHover] = useState(false)

	function openPopup(popupType) {
		setPopup(popupType)
	}

	function showSummary() {
		setHover(true)
	}

	function hideSummary() {
		setHover(false)
	}

	return (
		<div className="App">
			<div className="content">
				<div onMouseOver={hideSummary} className="navbar-container">
					<div className={`navbar-menu ${popup ? "off" : ""}`}>
						<div className="menu-tag">menu</div>
						<div
							className={`navbar-item ${popup ? "off" : ""}`}
							onClick={() => openPopup("purchase")}
						>
							Purchase
						</div>
						<div
							className={`navbar-item ${popup ? "off" : ""}`}
							onClick={() => openPopup("contact")}
						>
							Contact
						</div>
					</div>
					<Popup popup={popup} setPopup={setPopup} />
				</div>
				<div className="cover-container">
					<img onMouseOver={showSummary} src={cover} alt="cover" className="cover-img" />
					<div className={`summary-container ${hover ? '' : 'off'}`}>
						<div className="book-summary">
							<p className="summary-italic">
								All I am really trying to say is: there are not as many endings as
								we think.
							</p>
							<p className="summary-body">
								When life does not go as planned, plants are there to remind us of
								the rhythm of the world. In thirteen unique essays, Soon I’ll Be
								from the Soil Someday explores how plants and gardening practices
								can help us to mourn, to grow, and to become more comfortable with
								death—to understand death as an honorable piece of nature. Soil is
								the space where life and death meet, and these essays hold our
								hand as we journey into that space.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
