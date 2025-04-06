import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Gallery from "./pages/Gallery/Gallery";
import Wall from "./pages/Wall/Wall";
import About from "./pages/About/About";
import Navigation from "./components/Navigation/Navigation";
import GlobalContext from "./Context/GlobalContext";
import Progothon from "./pages/Progothon/Progothon";

const App = () => {
	AOS.init();
	const location = useLocation();
	const { breakpoint, setOpenNav } = useContext(GlobalContext);
	useEffect(() => {
		setOpenNav(false);
	}, [location.pathname, setOpenNav]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<Header />
			{(breakpoint("mobile") || breakpoint("tab")) && <Navigation />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/wall-of-fame" element={<Wall />} />
				<Route path="/event/progothon" element={<Progothon />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/team" element={<Team />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			{location.pathname !== "/contact" && <Footer />}
		</>
	);
};

export default App;
