import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
// Styled
import styled from 'styled-components';
// Animation
import { leftEntryAnim, rightEntryAnim, slideRight } from '../animation';
// Components
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
// Data
import { projectsData } from '../data';

const Projects = ({ navOpen, setShowLogo }) => {
	const [modal, setModal] = useState({ open: false, modalId: null });
	const container = useRef(null);
	const scrollHandler = () => {
		const yPosition = container.current.getClientRects()[0].y;
		if (yPosition < 90) {
			setShowLogo(false);
		} else {
			setShowLogo(true);
		}
	};

	return (
		<>
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					{modal.open && <ProjectModal modal={modal} setModal={setModal} />}
				</AnimatePresence>
				<StyledCont onScroll={scrollHandler}>
					<OuterMain
						variants={slideRight}
						animate={navOpen ? 'animate' : 'exit'}
						initial={false}
						ref={container}
					>
						<OuterCont
							ref={container}
							variants={leftEntryAnim}
							initial="init"
							animate="anim"
							exit="exit"
						>
							{projectsData
								.slice(0, 2)
								.map(({ media, name, shortDesc, id }) => (
									<ProjectCard
										image={media.img}
										name={name}
										desc={shortDesc}
										id={id}
										key={id}
										modal={modal}
										setModal={setModal}
									/>
								))}
						</OuterCont>
						<OuterCont
							variants={rightEntryAnim}
							initial="init"
							animate="anim"
							exit="exit"
						>
							{projectsData.slice(2).map(({ media, name, shortDesc, id }) => (
								<ProjectCard
									image={media.img}
									name={name}
									desc={shortDesc}
									id={id}
									key={id}
									modal={modal}
									setModal={setModal}
								/>
							))}
						</OuterCont>
					</OuterMain>
				</StyledCont>
			</AnimateSharedLayout>
		</>
	);
};

const StyledCont = styled(motion.div)`
	padding: 15vh 0 1vh;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: -1;
	overflow-y: scroll;
	@media (orientation: landscape) and (max-width: 825px) {
		align-items: flex-start;
		padding: 25vh 0 1vh;
	}
	@media (max-width: 600px) {
		align-items: flex-start;
	}
`;

const OuterMain = styled(motion.div)`
	min-width: 360px;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
`;

const OuterCont = styled(motion.div)`
	min-width: 360px;
	display: grid;
	grid-gap: 0.5rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	justify-items: center;
	align-items: center;
`;

export default Projects;
