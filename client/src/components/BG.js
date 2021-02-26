import React from 'react';
import styled from 'styled-components';

export const BG = () => {
	return <Background />;
};

const Background = styled.div`
	background: url('https://res.cloudinary.com/laurynasrup/image/upload/f_auto,q_auto:eco/v1612529871/Portfolio%20Images/bg_bckf8q.jpg')
		top left no-repeat;
	background-size: cover;
	position: absolute;
	width: 100%;
	height: 100vh;
	z-index: -1;
	padding: 5rem;
	overflow: hidden;
`;

export default BG;
