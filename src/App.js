import "./App.css";
import cover from "./book_cover.jpeg";
import { useState } from 'react';
import Popup from './Popup.jsx';

import { init } from "@emailjs/browser";
init("FN0kgaiyoK4JrPv1h");

function App() {
	let [popup, setPopup] = useState(false)

	function openPopup(popupType) {
		setPopup(popupType)
	}

	return (
		<div className="App">
			<div className="content">
				<div className="navbar-container">
					<div className={`navbar-menu ${popup ? 'off' : ''}`}>
						<div className="menu-tag">menu</div>
						<div className={`navbar-item ${popup ? 'off' : ''}`} onClick={()=>openPopup('purchase')}>Purchase</div>
						<div className={`navbar-item ${popup ? 'off' : ''}`} onClick={()=>openPopup('contact')}>Contact</div>
					</div>
					<Popup popup={popup} setPopup={setPopup}/>
				</div>
				<div className="cover-container">
					<img src={cover} alt="cover" className="cover-img"/>
				</div>
			</div>
		</div>
	);
}

export default App;
