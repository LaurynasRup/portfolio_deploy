import React from 'react';
// Styled
import styled from 'styled-components';
// Motion
import { motion } from 'framer-motion';
// Animation
import { slideRight } from '../animation';
// Components
import TextType from '../components/TextType';
// Text Data
import { textData } from '../data';

const AboutTop = ({ navOpen, typingDoneHandler, aboutVisited, photoRef }) => {
	return (
		<TopCont
			variants={slideRight}
			animate={navOpen ? 'animate' : 'exit'}
			initial={false}
		>
			<div className="photo" ref={photoRef}>
				<img
					src="https://res.cloudinary.com/laurynasrup/image/upload/q_auto:low/v1613429249/portrait_e7emyg.jpg"
					alt="Laurynas Rup portrait"
				/>
				<div className="filter"></div>
			</div>
			<DescriptionCont>
				{!aboutVisited.visted && !aboutVisited.left ? (
					<TextType
						typingDoneHandler={typingDoneHandler}
						aboutVisited={aboutVisited}
					/>
				) : (
					textData.map((text, index) => (
						<p className={`linear-p${index + 1}`} key={index}>
							{text}
						</p>
					))
				)}
			</DescriptionCont>
		</TopCont>
	);
};

const TopCont = styled(motion.div)`
	display: flex;
	width: 100%;
	justify-content: center;
	.photo {
		height: 330px;
		width: 320px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 20px;
		margin: 0rem 1rem;
		overflow: hidden;
		position: relative;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.filter {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			background: rgba(0, 0, 0, 0.2);
		}
		@media (max-width: 1000px) {
			/* height: 250px;
			width: 250px; */
			margin: 0.5rem;
		}
		@media (max-width: 700px) {
			height: 300px;
			width: 300px;
			margin: 0 0 1rem 0rem;
		}
	}
	@media (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
	@media (orientation: landscape) and (max-width: 820px) {
		flex-direction: row;
	}
`;

const DescriptionCont = styled(motion.div)`
	height: 300px;
	width: 350px;
	margin: 0rem 1rem;
	p {
		font-size: 1.15rem;
		/* font-weight: lighter; */
		letter-spacing: 0.08rem;
		line-height: 1.2rem;
		padding-bottom: 2rem;
		white-space: pre;
		&:first-of-type {
			font-size: 1.5rem;
			@media (max-width: 1000px) {
				font-size: 1.3rem;
			}
		}
		@media (max-width: 1000px) {
			/* padding-bottom: 0.8rem; */
			/* font-size: 1rem; */
		}
		@media (max-width: 700px) {
			padding-bottom: 0.8rem;
			font-size: 1rem;
		}
		/* 
		@media (orientation: landscape) and (max-width: 900px) {
			font-size: 0.9rem;
			padding-bottom: 0.8rem;
			line-height: 0.9rem;
		} */
	}
	/* @media (max-width: 1000px) {
		height: 250px;
		width: 320px;
		margin: 0.5rem;
	} */
	@media (max-width: 700px) {
		height: auto;
		width: 300px;
	}
`;

export default AboutTop;
