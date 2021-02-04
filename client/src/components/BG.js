import React from 'react';
import styled from 'styled-components';
import BgImage from '../img/bg.jpg';

export const BG = () => {
	return <Background BgImage={BgImage}></Background>;
};

const Background = styled.div`
	background: url(${(props) => props.BgImage}) top left no-repeat;
	background-size: cover;
	position: absolute;
	width: 100%;
	height: 100vh;
	z-index: -1;
	padding: 5rem;
	overflow: hidden;
`;

export default BG;
