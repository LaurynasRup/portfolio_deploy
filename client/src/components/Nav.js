import React, { useEffect } from 'react';
// Styled
import styled from 'styled-components';
// Link
import { Link, useLocation } from 'react-router-dom';
// Motion
import { motion, AnimatePresence } from 'framer-motion';

// Nav Animation
import { navAnim } from '../animation';

const Nav = ({ navOpen, setNavOpen, screenWidth }) => {
	// Get location
	const { pathname } = useLocation();

	// Close nav on afrer 3s after path change
	useEffect(() => {
		if (pathname !== '/') {
			setTimeout(() => {
				if (navOpen) {
					setNavOpen(!navOpen);
				}
			}, 1000);
		} else {
			if (screenWidth < 450) {
				setTimeout(() => {
					if (navOpen) {
						setNavOpen(!navOpen);
					}
				}, 1000);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<>
			<AnimatePresence>
				<StyledList
					navOpen={navOpen}
					variants={navAnim}
					initial="exit"
					animate={navOpen ? 'show' : 'exit'}
					exit="exit"
					className="display-font"
				>
					<ListWrap>
						<StyledListItem variants={navAnim}>
							<Link
								to="/"
								style={{
									color: `${pathname === '/' ? '#9d1a30' : '#456aba'}`,
								}}
							>
								home
							</Link>
							<Line
								transition={{ duration: 0.5 }}
								initial={{ width: 0 }}
								animate={{ width: pathname === '/' ? '3.4rem' : 0 }}
							/>
						</StyledListItem>
						<StyledListItem variants={navAnim}>
							<Link
								to="/about"
								style={{
									color: `${pathname === '/about' ? '#9d1a30' : '#456aba'}`,
								}}
							>
								about
							</Link>
							<Line
								transition={{ duration: 0.5 }}
								initial={{ width: 0 }}
								animate={{ width: pathname === '/about' ? '4.3rem' : 0 }}
							/>
						</StyledListItem>
						<StyledListItem variants={navAnim}>
							<Link
								to="/projects"
								style={{
									color: `${pathname === '/projects' ? '#9d1a30' : '#456aba'}`,
								}}
							>
								projects
							</Link>
							<Line
								transition={{ duration: 0.5 }}
								initial={{ width: 0 }}
								animate={{ width: pathname === '/projects' ? '6.7rem' : 0 }}
							/>
						</StyledListItem>
						<StyledListItem variants={navAnim}>
							<Link
								to="/contact"
								style={{
									color: `${pathname === '/contact' ? '#9d1a30' : '#456aba'}`,
								}}
							>
								contact
							</Link>
							<Line
								transition={{ duration: 0.5 }}
								initial={{ width: 0 }}
								animate={{ width: pathname === '/contact' ? '5.7rem' : 0 }}
							/>
						</StyledListItem>
					</ListWrap>
				</StyledList>
			</AnimatePresence>
		</>
	);
};

const StyledList = styled(motion.ul)`
	padding: 0 2rem;
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	backdrop-filter: blur(30px);
	z-index: 10;
	@media (max-width: 450px) {
		width: 100%;
		align-items: center;
		padding: 35% 2rem 30%;
		backdrop-filter: blur(100px);
	}

	a {
		text-decoration: none;
		color: #456aba;
		transition: color 0.15s ease;
		&:hover {
			color: #9d1a30;
		}
	}
`;
const ListWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: 450px) {
		align-items: center;
		width: 100%;
	}
`;

const StyledListItem = styled(motion.li)`
	list-style: none;
	position: relative;
	display: flex;
	margin-top: 6rem;
	@media (max-height: 415px) {
		margin-top: 2rem;
	}
`;

const Line = styled(motion.div)`
	height: 1px;
	background: #9d1a30;
	width: 0;
	position: absolute;
	bottom: -25%;
	left: 0;
`;

export default Nav;
