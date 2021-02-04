import React from 'react';
//Styled
import styled from 'styled-components';
//Motion
import { motion } from 'framer-motion';

const ProjectCard = ({ image, name, desc, modal, setModal, id }) => {
	const modalHandler = () => {
		setModal({ ...modal, open: !modal.open, modalId: id });
	};
	return (
		<Card layoutId={id} onClick={modalHandler} modal={modal} layout>
			<StyledImg src={image} layoutId={`img ${id}`} />
			<motion.p className="name linear-text-style" layoutId={`head ${id}`}>
				{name}
			</motion.p>
			<motion.p className="desc linear-text-style">{desc}</motion.p>
		</Card>
	);
};

const Card = styled(motion.div)`
	cursor: pointer;
	width: 300px;
	height: 330px;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	backdrop-filter: blur(15px);
	transition: box-shadow 0.5s ease;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	z-index: 5;
	display: ${(props) => (props.modal.open ? 'none' : 'flex')};
	&:hover {
		box-shadow: 0 2px 3px rgba(0, 0, 0, 1);
	}
	p {
		font-weight: 300;
	}
	p.name {
		font-size: 20px;
		padding: 1.5rem 0rem;
		font-weight: bolder;
	}
	p.desc {
		font-size: 16px;
	}
	a {
		text-decoration: none;
	}
`;

const StyledImg = styled(motion.img)`
	margin: 0 auto;
	width: 100%;
	height: 50%;
	border-radius: 5px;
`;

export default ProjectCard;
