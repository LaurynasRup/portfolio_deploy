import React, { useState } from 'react';
// Styled & motion
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Import project data
import { projectsData } from '../data';
// Components
import VideoPlayer from '../components/VideoPlayer';

const ProjectModal = ({ modal, setModal }) => {
	const [mobileVideo, setMobileVideo] = useState(false);
	// Close modal
	const closeModalHandler = (e) => {
		const target = e.target;
		if (target.classList.contains('shadow')) {
			setModal({ ...modal, open: !modal.open, modalId: null });
		}
	};
	// Get current project
	const current = projectsData[modal.modalId - 1];
	// Handle mobile video
	const mobileHandler = () => {
		setMobileVideo(!mobileVideo);
	};
	// Get current width
	const currentWidth = window.innerWidth;

	return (
		<ShadowCont className="shadow" onClick={closeModalHandler}>
			<StyledModal layoutId={currentWidth > 820 ? modal.modalId : ''} layout>
				<VideoPlayer
					layoutId={`img ${modal.modalId}`}
					src={mobileVideo ? current.media.mobileVid : current.media.desktopVid}
					mobileVideo={mobileVideo}
				/>
				<motion.p
					className="name linear-text-style"
					layoutId={currentWidth > 820 ? `head ${modal.modalId}` : ''}
				>
					{current.name}
				</motion.p>
				<motion.p className="longDesc linear-text-style">
					{current.longDesc}
				</motion.p>
				<div className="btns">
					<a
						href={current.links.github}
						className="btn btn-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
					<div className="btn">Live</div>
					<div className="btn" onClick={mobileHandler}>
						{mobileVideo ? 'Desktop' : 'Mobile'}
					</div>
				</div>
			</StyledModal>
		</ShadowCont>
	);
};

const ShadowCont = styled(motion.div)`
	height: 100vh;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	padding-bottom: 1rem;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 20;
	@media (orientation: landscape) and (max-width: 825px) {
		align-items: flex-start;
		overflow-y: scroll;
	}
`;

const StyledModal = styled(motion.div)`
	width: 630px;
	height: 640px;
	border-radius: 25px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(15px);
	padding: 3rem 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	color: white;
	img {
		width: 100%;
		height: 35vh;
		border-radius: 15px;
	}
	.name {
		align-self: flex-start;
		padding: 1rem 0rem;
		font-size: 1.8rem;
		font-weight: 300;
		@media (max-width: 650px) {
			padding: 1rem 0rem;
			font-size: 1.4rem;
		}
	}
	.longDesc {
		@media (max-width: 650px) {
			font-size: 0.85rem;
		}
	}
	.btns {
		padding-top: 2rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.btn {
			cursor: pointer;
			color: #000;
			background: linear-gradient(to right, #456aba, #982539);
			width: 130px;
			height: 30px;
			border-radius: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: transform 0.3s ease;
			&:active {
				transform: scale(0.95);
			}
			@media (max-width: 650px) {
				width: 80px;
				height: 20px;
				font-size: 0.7rem;
			}
		}
		.btn-link {
			text-decoration: none;
		}
	}
	@media (max-width: 650px) {
		width: 360px;
		height: 490px;
		padding: 1.5rem 2rem;
	}
`;

export default ProjectModal;
