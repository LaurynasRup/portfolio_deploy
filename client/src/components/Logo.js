import React from 'react';
import styled from 'styled-components';

const Logo = ({ navOpen, navHandler, showLogo }) => {
	return (
		<StyledLogo
			onClick={navHandler}
			className="display-font"
			showLogo={showLogo}
		>
			<StyledLetter navOpen={navOpen}>LR</StyledLetter>
			<StyledDot navOpen={navOpen}>.</StyledDot>
		</StyledLogo>
	);
};

const StyledLogo = styled.p`
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	cursor: pointer;
	font-size: 2rem;
	z-index: 15;
	opacity: ${({ showLogo }) => (showLogo ? 1 : 0)};
	transition: opacity 0.2s ease;
`;
const StyledLetter = styled.span`
	color: ${(props) => (props.navOpen ? '#456aba' : '#9d1a30')};
	transition: color 0.5s ease;
`;

const StyledDot = styled.span`
	color: ${(props) => (props.navOpen ? '#9d1a30' : '#456aba')};
	transition: color 0.5s ease;
`;

export default Logo;
