import React from 'react';
// Styled
import styled from 'styled-components';
// Motion
import { motion } from 'framer-motion';
// Animation
import { nameAnim, leftEntryAnim, rightEntryAnim } from '../animation';

const Home = ({ navOpen }) => {
	return (
		<StyledCont className="display-font">
			<div className="text">
				<motion.div
					variants={leftEntryAnim}
					initial="init"
					animate="anim"
					exit="exit"
				>
					<StyledName
						variants={nameAnim}
						animate={navOpen ? 'animate' : 'exit'}
						initial={false}
					>
						<span className="linear-text-style">LauRyNas Rupainis.</span>
					</StyledName>
				</motion.div>
				<motion.div
					variants={rightEntryAnim}
					initial="init"
					animate="anim"
					exit="exit"
					style={{ alignSelf: 'flex-end' }}
				>
					<StyledDesc>
						<span className="linear-text-style2">FRoNT END WEB DEVELOPER</span>
					</StyledDesc>
				</motion.div>
			</div>
		</StyledCont>
	);
};

const StyledCont = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: -1;
	overflow: hidden;
	.text {
		display: flex;
		flex-direction: column;
		/* width: 75%; */
		/* background: grey; */
	}
`;

const StyledName = styled(motion.p)`
	font-size: 6.25rem;
	padding-right: 6rem;
	@media (max-width: 1100px) {
		font-size: 4rem;
		/* padding-right: 4rem; */
	}
	@media (max-width: 750px) {
		font-size: 2rem;
		padding-right: 2rem;
	}
`;

const StyledDesc = styled.p`
	font-size: 2.25rem;
	line-height: 4rem;
	@media (max-width: 1100px) {
		font-size: 1.5rem;
		line-height: 2.5rem;
	}
	@media (max-width: 750px) {
		font-size: 1rem;
		line-height: 2rem;
	}
`;

export default Home;
