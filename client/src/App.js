import './App.css';
import React, { useEffect, useState } from 'react';
// Animation
import { AnimatePresence } from 'framer-motion';
// Components
import BG from './components/BG';
import Nav from './components/Nav';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Logo from './components/Logo';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
	// Track if nav is open
	const [navOpen, setNavOpen] = useState(false);
	// Track if about page visited
	const [aboutVisited, setAboutVisited] = useState({
		visited: false,
		left: false,
	});
	// Show & hide logo on croll over
	const [showLogo, setShowLogo] = useState(true);

	// Track pathname
	const history = useHistory().location.pathname;

	// Track when about is visited and left
	const trackAbout = () => {
		if (history === '/about') {
			setAboutVisited({ ...aboutVisited, visited: true });
		}
		if (aboutVisited.visited === true) {
			setAboutVisited({ ...aboutVisited, left: true });
		}
	};
	useEffect(() => {
		trackAbout();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [history]);

	// Toggle Nav
	const navHandler = () => {
		setNavOpen(!navOpen);
	};

	const location = useLocation();
	return (
		<div className="App" style={{ overflow: 'hidden' }}>
			<BG />
			<Logo navOpen={navOpen} navHandler={navHandler} showLogo={showLogo} />
			<Nav navOpen={navOpen} setNavOpen={setNavOpen} />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<Home navOpen={navOpen} />
					</Route>
					<Route path="/about" exact>
						<About
							navOpen={navOpen}
							aboutVisited={aboutVisited}
							setShowLogo={setShowLogo}
						/>
					</Route>
					<Route path="/projects" exact>
						<Projects navOpen={navOpen} setShowLogo={setShowLogo} />
					</Route>
					<Route path="/contact" exact>
						<Contact navOpen={navOpen} />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
};

export default App;
