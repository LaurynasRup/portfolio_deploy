// Images
import Brewdog from './img/BrewdogImg.png';
import Restaurant from './img/Restaurant.png';
import Trckr from './img/FootballTrckr.png';
import Planted from './img/Planted.png';
// Desktop Videos
import PunkDesktop from './video/PunkDesktop.mp4';
import RestaurantDesktop from './video/RestaurantDesktop.mp4';
import TrckrDesktop from './video/TrckrDesktop.mp4';
import PlantedDesktop from './video/PlantedDesktop.mp4';
// Mobile Videos
import PunkMobile from './video/PunkMobile.mp4';
import RestaurantMobile from './video/RestaurantMobile.mp4';
import TrckrMobile from './video/TrckrMobile.mp4';
import PlantedMobile from './video/PlantedMobile.mp4';

export const projectsData = [
	{
		id: 1,
		name: 'Brewdog Meal Matcher',
		shortDesc:
			'A single page app, built with HTML, CSS & JS. The app returns a list of beers matching a meal, provided by the user.',
		longDesc:
			'This is a single page web application developed using HTML, CSS and Vanilla JS. It is build in accordance to the MVC design pattern and is bundled with the help of Webpack module bundler. The app returns a list of beers, a single or a random beer from an external API based on user input. The application also features pagination functionality as well as liking capability, implemented via local storage.',
		media: {
			img: Brewdog,
			desktopVid: PunkDesktop,
			mobileVid: PunkMobile,
		},
		links: {
			github: 'https://github.com/LaurynasRup/beer_matcher',
			live: '',
		},
	},
	{
		id: 2,
		name: 'Ruppo Restaurant',
		shortDesc:
			'An informative fine-dining restaurant webiste, featuring automated image carousel and a mock-up booking system.',
		longDesc:
			'This is a multiple page informative website, built with HTML, CSS and Vanilla JS. It is structured with one CSS file and multiple HTML pages each paired with a designated JS file. The website utilises multiple automatic image carousels coupled with image navs. It also involves a fictional restaurant booking functionality, featuring multiple forms and employing a client side validation.',
		media: {
			img: Restaurant,
			desktopVid: RestaurantDesktop,
			mobileVid: RestaurantMobile,
		},
		links: {
			github: 'https://github.com/LaurynasRup/ruppo_restaurant',
			live: '',
		},
	},
	{
		id: 3,
		name: 'My Football Tracker',
		shortDesc:
			'A full stack app which allows user to track favoutite football leagues, see current standings, previous results and upcomimg fixtures.',
		longDesc:
			'This is a full stack multi-page web-application. Client side is built with JS, CSS & HTML and bundled with Webpack. The server side is built with Node JS, Express & MySql. The app includes encrypted sign up and login features and allows user to store footbal leagues to their account. It provides data of current league table, scores of previous matches and schedule of upcominig fixtures, all retrieved from an external API. ',
		media: {
			img: Trckr,
			desktopVid: TrckrDesktop,
			mobileVid: TrckrMobile,
		},
		links: {
			github: 'https://github.com/LaurynasRup/trckr',
			live: '',
		},
	},
	{
		id: 4,
		name: 'Planted',
		shortDesc:
			'A plant e-shop, developed with React JS, with implemented shopping basket functionality and a simulated chekout feature.',
		longDesc:
			'This is a fictional plant e-shop website, built with React JS. It provides a multi-page experience implemented with React-Router, a product filtering functioanlity, as well as shopping basket features. The website incorporates scroll as well as page transition animations, implemented with Framer Motion library. It includes a few forms, which simulates checking-out process and are validated on the client side.',
		media: {
			img: Planted,
			desktopVid: PlantedDesktop,
			mobileVid: PlantedMobile,
		},
		links: {
			github: 'https://github.com/LaurynasRup/planted/tree/master/planted',
			live: '',
		},
	},
];

export const textData = [
	`Hi,`,
	`I am Laurynas Rupainis, a London\nbased front-end web developer.`,
	`Started developer journey in early\n2020 and have been passionate\nabout it ever since.`,
	`I currently enjoy building client side\nprojects and expanding my skill-set\nto become a full stack dev.`,
	`Tech I use:`,
];
