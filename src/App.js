import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Technical from "./Technical";
import Education from "./Education";
import Contact from "./Contact";
import NavBar from "./NavBar";
import ThankYou from "./Thanks"
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/technical" element={<Technical />} />
					<Route path="/education" element={<Education />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/thankyou" element={<ThankYou />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
