import React from 'react';
// Framer & Styled
import { motion } from 'framer-motion';
import styled from 'styled-components';
// Animation
import { leftEntryAnim } from '../animation';
// Components
import ContactForm from '../components/ContactForm';

const Contact = ({ navOpen }) => {
	return (
		<Page variants={leftEntryAnim} initial="init" animate="anim" exit="exit">
			<ContactForm navOpen={navOpen} />
		</Page>
	);
};

const Page = styled(motion.div)`
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: -1;
	overflow: hidden;
	@media (orientation: landscape) and (max-width: 825px) {
		align-items: flex-start;
		padding-top: 20vh;
		overflow-y: scroll;
	}
`;

export default Contact;
