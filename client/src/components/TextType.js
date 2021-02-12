import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// data
import { textData } from '../data';

const TextType = ({ typingDoneHandler }) => {
	// Text data
	const [texts, setTexts] = useState([
		...textData.map((text) => {
			return {
				text,
				currentText: '',
			};
		}),
	]);

	// Track which text to display
	const [textCount, setTextCount] = useState(0);

	// Typing logic
	const typeText = (idx) => {
		let isCancelled = false;
		if (!isCancelled) {
		}
		// Initial end of string index
		let index = 1;
		// Only run if not last text
		if (textCount <= texts.length - 1) {
			// delay on start
			const delay = setTimeout(() => {
				// Run every 35ms, diplay new letter
				const timer = setInterval(() => {
					// If its not last letter of the text - add one letter
					if (texts[idx].currentText.length !== texts[idx].text.length) {
						// Copy state
						const copyState = texts;
						copyState[idx].currentText = texts[idx].text.slice(0, index++);
						setTexts([...copyState]);
					} else {
						// If last letter - clear interval
						clearInterval(timer);
						// Run fn to display icons on end
						if (textCount >= 4) typingDoneHandler();
						// Increase text count to display next text
						setTextCount(textCount + 1);
					}
				}, 30);
				// clear interval
				return () => clearInterval(timer);
			}, 1200);
			return () => clearTimeout(delay);
		}
	};
	// Display new line of text, when count changes

	useEffect(() => {
		let isMount = true;
		if (isMount) {
			typeText(textCount);
		}
		return () => {
			isMount = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textCount]);

	return (
		<Outer>
			{texts.map((text, index) => (
				<p className={`linear-p${index + 1}`} key={index}>
					{text.currentText}
				</p>
			))}
		</Outer>
	);
};
const Outer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export default TextType;
