import React, { useRef, useState } from 'react';
//Styled
import styled from 'styled-components';
//Motion
import { motion, AnimateSharedLayout } from 'framer-motion';
// Icons
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const VideoPlayer = ({ src, mobileVideo, poster }) => {
	// State to display controls
	const [showControls, setShowControls] = useState(false);
	// State to control & display icons
	const [videoProgress, setVideoProgress] = useState({
		isPlaying: true,
		complete: false,
	});
	const player = useRef();
	// Handle video controls on click
	const controlsHandler = () => {
		if (!player.current.paused) {
			player.current.pause();
			setVideoProgress({ ...videoProgress, isPlaying: false });
		} else {
			player.current.play();
			setVideoProgress({ ...videoProgress, isPlaying: true });
		}
	};
	// Handle video end
	const endVideoHandler = () => {
		setVideoProgress({ ...videoProgress, complete: true, isPlaying: false });
	};
	return (
		<AnimateSharedLayout type="crossfade">
			<OuterCont
				onClick={controlsHandler}
				onMouseEnter={() => setShowControls(true)}
				onMouseLeave={() => setShowControls(false)}
				mobileVideo={mobileVideo}
			>
				{showControls && (
					<ControlsDiv>
						{videoProgress.isPlaying ? (
							<BsPauseFill size="3em" color="rgba(255,255,255,0.7)" />
						) : (
							<BsFillPlayFill size="3em" color="rgba(255,255,255,0.7)" />
						)}
					</ControlsDiv>
				)}
				<motion.video
					layoutId="video"
					ref={player}
					src={src}
					muted={true}
					autoPlay={true}
					onEnded={endVideoHandler}
					poster={poster}
				/>
			</OuterCont>
		</AnimateSharedLayout>
	);
};

const OuterCont = styled(motion.div)`
	width: 100%;
	height: 50%;
	overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;
	video {
		height: 100%;
		z-index: 5;
		border-radius: 15px;
		overflow: hidden;
		object-fit: cover;
	}
`;
const ControlsDiv = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	* {
		cursor: pointer;
	}
`;

export default VideoPlayer;
