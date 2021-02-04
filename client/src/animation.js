export const navAnim = {
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.4,
			// type: 'spring',
			mass: 1,
			staggerChildren: 0.15,
		},
	},
	hidden: { opacity: 0, x: '-100%' },
	exit: {
		opacity: 0,
		x: '-100%',
		transition: {
			duration: 0.5,
		},
	},
};

export const nameAnim = {
	animate: {
		x: window.innerWidth < 1100 ? 105 : 115,
		transition: { duration: 0.5, type: 'spring', mass: 1 },
	},
	exit: { x: 0, transition: { duration: 0.5, type: 'spring', mass: 1 } },
};

export const slideRight = {
	animate: {
		x: window.innerWidth < 450 ? 0 : 45,
		transition: { duration: 0.5, type: 'spring', mass: 1 },
	},
	exit: { x: 0, transition: { duration: 0.5, type: 'spring', mass: 1 } },
};

export const leftEntryAnim = {
	init: { x: '-200%' },
	anim: {
		x: 0,
		transition: {
			duration: 0.75,
			type: 'spring',
			mass: 0.9,
			ease: 'anticipate',
		},
	},
	exit: {
		x: '300%',
		transition: {
			duration: 0.5,
			type: 'spring',
			mass: 0.9,
			ease: 'anticipate',
		},
	},
};
export const rightEntryAnim = {
	init: { x: '200%' },
	anim: {
		x: 0,
		transition: {
			duration: 0.75,
			type: 'spring',
			mass: 0.9,
			ease: 'anticipate',
		},
	},
	exit: {
		x: '-300%',
		transition: {
			duration: 0.5,
			type: 'spring',
			mass: 0.9,
			ease: 'anticipate',
		},
	},
};

export const devIconsAnim = {
	hide: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.75, staggerChildren: 0.15 } },
	exit: { opacity: 0, transition: { duration: 0.75 } },
};
