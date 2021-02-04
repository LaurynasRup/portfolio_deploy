import React, { useEffect, useState } from 'react';
// Components
import AboutTop from '../components/AboutTop';
import AboutBotttom from '../components/AboutBottom';
// Motion
import { motion } from 'framer-motion';
// Animation
import { leftEntryAnim } from '../animation';
// Styled
import styled from 'styled-components';

const About = ({ navOpen, aboutVisited }) => {
	// State for dev icons
	const [devIcons, setDevIcons] = useState({
		icons: 1,
		show: false,
	});
	// state
	const [count, setCount] = useState(false);

	// Handle typing end
	const typingDoneHandler = () => {
		setDevIcons({
			...devIcons,
			show: true,
		});
		setCount(!count);
	};
	useEffect(() => {
		if (aboutVisited.visited && aboutVisited.left) {
			typingDoneHandler();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<MainContainer
			variants={leftEntryAnim}
			initial="init"
			animate="anim"
			exit="exit"
		>
			<AboutTop
				devIcons={devIcons}
				setDevIcons={setDevIcons}
				navOpen={navOpen}
				count={count}
				setCount={setCount}
				typingDoneHandler={typingDoneHandler}
				aboutVisited={aboutVisited}
			/>
			<AboutBotttom
				devIcons={devIcons}
				setDevIcons={setDevIcons}
				navOpen={navOpen}
				count={count}
				setCount={setCount}
			/>
		</MainContainer>
	);
};

const MainContainer = styled(motion.div)`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: -1;
	padding-top: 10rem;
	@media (max-width: 1300px) {
		overflow-y: scroll;
	}
	@media (max-width: 1000px) {
	}
	@media (max-width: 700px) {
		padding-top: 15vh;
		justify-content: flex-start;
	}
	@media (orientation: landscape) and (max-width: 820px) {
		padding-top: 15vh;
		padding-top: 7rem;
	}
`;

export default About;
