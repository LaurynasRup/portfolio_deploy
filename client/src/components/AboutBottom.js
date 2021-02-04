import React, { useEffect } from 'react';
// Motion
import { motion, AnimatePresence } from 'framer-motion';
// Animation
import { devIconsAnim, slideRight } from '../animation';
// Styled
import styled from 'styled-components';
// Custom hook
import { useIsMount } from '../useIsMount';
// Icons
import Icons from '../svg/Icons';

const AboutBottom = ({ devIcons, navOpen, setDevIcons, count, setCount }) => {
	// Use effect except first render
	const isMount = useIsMount();

	// Run timeout to display diff sets of icons
	useEffect(() => {
		if (!isMount) {
			const time = setTimeout(() => {
				setDevIcons({
					...devIcons,
					show: !devIcons.show,
				});
				setTimeout(() => {
					setDevIcons({
						...devIcons,
						show: !devIcons.show,
					});
					setTimeout(() => {
						setDevIcons({
							...devIcons,
							icons: devIcons.icons === 1 ? 2 : 1,
						});
						setCount(!count);
					}, 1);
				}, 1000);
			}, 9000);
			return () => {
				clearTimeout(time);
			};
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count]);
	return (
		<>
			<motion.div
				variants={slideRight}
				animate={navOpen ? 'animate' : 'exit'}
				initial={false}
			>
				<AnimatePresence>
					{devIcons.icons === 1 && (
						<BottomCont
							variants={devIconsAnim}
							initial="hide"
							animate={devIcons.show ? 'show' : 'hide'}
							exit="exit"
							key="icons"
						>
							{Icons.slice(0, 6).map((Icon, index) => (
								<motion.span variants={devIconsAnim} key={index}>
									<Icon />
								</motion.span>
							))}
						</BottomCont>
					)}
					{devIcons.icons === 2 && (
						<BottomCont
							variants={devIconsAnim}
							initial="hide"
							animate={devIcons.show ? 'show' : 'hide'}
							exit="exit"
							key="icons"
						>
							{Icons.slice(6).map((Icon, index) => (
								<motion.span variants={devIconsAnim} key={index}>
									<Icon />
								</motion.span>
							))}
						</BottomCont>
					)}
				</AnimatePresence>
			</motion.div>
		</>
	);
};

const BottomCont = styled(motion.div)`
	min-width: 1000px;
	width: 100%;
	height: 15vh;
	padding: 5rem 0.2rem 0rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1000px) {
		min-width: 650px;
		width: 100%;
	}
	@media (orientation: landscape) and (max-width: 820px) {
		width: 550px;
		padding: 2rem 0.2rem 0rem;
		/* height: auto; */
		min-height: 6vh;
	}
	@media (max-width: 700px) {
		min-width: 300px;
		padding: 1rem 0.2rem;
		/* height: auto; */
		min-height: 6vh;
	}
`;

export default AboutBottom;
