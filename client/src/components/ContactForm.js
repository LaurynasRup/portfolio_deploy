import React, { useState } from 'react';
// Framer & Styled C.
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
// Icons
import { LinkedInIcon, TwitterIcon, FBIcon } from '../svg/Icons';
// Animation
import { slideRight } from '../animation';
// Axios
import axios from 'axios';

const ContactForm = ({ navOpen }) => {
	// Form input state
	const [formInput, setFormInput] = useState([
		{ input: '', error: false },
		{ input: '', error: false },
		{ input: '', error: false },
	]);
	// Is message sent
	const [isMsgSent, setIsMsgSent] = useState(false);
	const [msgError, setMsgError] = useState(false);

	// Store user input
	const formInputHandler = (e) => {
		const targetId = e.target.id;
		const inputValue = e.target.value;
		const copyState = formInput;
		switch (targetId) {
			case 'name':
				copyState[0].input = inputValue;
				break;
			case 'email':
				emailValidate(inputValue)
					? (copyState[1].input = inputValue)
					: (copyState[1].input = '');
				break;
			case 'text':
				copyState[2].input = inputValue;
				break;
			default:
				break;
		}
		setFormInput([...copyState]);
	};

	// Validate email
	const emailValidate = (input) => {
		const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regEx.test(input) ? true : false;
	};

	// Handle form submit
	const formSubmitHandler = (e) => {
		e.preventDefault();
		// Display error border for empty field
		const stateCopy = [...formInput];
		stateCopy.forEach((input) => {
			if (input.input === '') {
				input.error = true;
			} else {
				input.error = false;
			}
		});
		setFormInput([...stateCopy]);
		// Store input data if no errors
		if (!formInput[0].error && !formInput[1].error && !formInput[2].error) {
			const inputData = {
				name: formInput[0].input,
				email: formInput[1].input,
				msg: formInput[2].input,
			};
			// Run fn to send to database
			postMsg(inputData);
		}
	};
	// Post message
	const postMsg = async (data) => {
		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};
		try {
			await axios.post('/messages', data);
			// Update sent messsage state
			setIsMsgSent(true);
		} catch (err) {
			setIsMsgSent(true);
			setMsgError(true);
		}
	};
	return (
		<AnimateSharedLayout>
			<Container
				isMsgSent={isMsgSent}
				layout
				variants={slideRight}
				animate={navOpen ? 'animate' : 'exit'}
			>
				{!isMsgSent ? (
					<>
						<p className="linear-text-style">
							Got a question or want to work together? Get in touch.
						</p>
						<StyledForm>
							<div
								className={
									formInput[0].error ? 'input-wrap error' : 'input-wrap'
								}
							>
								<input
									className="form-input name"
									type="text"
									placeholder="Name"
									id="name"
									onChange={formInputHandler}
								/>
							</div>
							<div
								className={
									formInput[1].error ? 'input-wrap error' : 'input-wrap'
								}
							>
								<input
									className="form-input email"
									type="text"
									id="email"
									placeholder="Email Address"
									onChange={formInputHandler}
								/>
							</div>
							<div
								className={
									formInput[2].error
										? 'input-wrap text error'
										: 'input-wrap text'
								}
							>
								<textarea
									className="form-input text"
									id="text"
									placeholder="Your Message..."
									onChange={formInputHandler}
								/>
							</div>
							<button className="submit-btn" onClick={formSubmitHandler}>
								Send It!
							</button>
						</StyledForm>
						<SocialCont>
							<a href="/" target="_blank" rel="noopener noreferrer">
								<LinkedInIcon />
							</a>
							<a href="/" target="_blank" rel="noopener noreferrer">
								<TwitterIcon />
							</a>
							<a href="/" target="_blank" rel="noopener noreferrer">
								<FBIcon />
							</a>
						</SocialCont>
					</>
				) : (
					<motion.p
						className="msg-sent linear-text-style"
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1 } }}
					>
						{!msgError ? (
							<motion.span className="msg-sent linear-text-style">
								Thank you for your message!{<br />}I will get back to you as
								soon as I can.
							</motion.span>
						) : (
							<motion.span className="msg-sent linear-text-style">
								Something went wrong...{<br />}Try refreshing the page.
							</motion.span>
						)}
					</motion.p>
				)}
			</Container>
		</AnimateSharedLayout>
	);
};

const Container = styled(motion.div)`
	z-index: 10;
	width: 550px;
	border-radius: 25px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(15px);
	padding: 3rem 4rem 2rem;
	padding: ${(props) =>
		props.isMsgSent ? '3rem 4rem 3rem' : '3rem 4rem 2rem'};
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 650px) {
		width: 345px;
		padding: 1.5rem 1rem;
	}
	p {
		width: 80%;
		font-size: 1.3rem;
		text-align: center;
		font-size: 1.5rem;
		padding-bottom: 2rem;
		@media (max-width: 650px) {
			font-size: 1.2rem;
			padding-bottom: 1.5rem;
		}
	}
	p.msg-sent {
		padding-bottom: 0;
		white-space: pre;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		width: auto;
		height: 100%;
		@media (max-width: 650px) {
			font-size: 1.1rem;
		}
		span {
			width: 100%;
			white-space: pre;
		}
	}
`;

const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 2.5rem;
	@media (max-width: 650px) {
		padding-bottom: 2rem;
	}
	.input-wrap {
		background: transparent;
		width: 98.2%;
		height: 2rem;
		margin: 0.3rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
	}
	.input-wrap.error {
		background: linear-gradient(170deg, #456aba, #c04c60);
	}
	.input-wrap.text {
		height: 8rem;
	}
	.form-input,
	.submit-btn {
		padding: 0.5rem 1.5rem;
		width: 99.5%;
		height: 94%;
		border: none;
		border-radius: 15px;
		font-family: 'Raleway', sans-serif;
		font-size: 1rem;
		background: #1b3655;
		&::-webkit-input-placeholder {
			color: #131212;
		}
		&:focus {
			outline: none;
		}
	}
	.form-input.text {
		resize: none;
		height: 98%;
	}
	.submit-btn {
		margin: 0.5rem 0rem;
		padding: 0.3rem 1.5rem;
		cursor: pointer;
		width: 45%;
		transition: all 0.5s ease;
		&:active {
			transform: scale(0.95);
		}
	}
`;

const SocialCont = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export default ContactForm;
