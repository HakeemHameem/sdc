import skillabhyudayaBG from "../images/bkl.jpg";
import Abstract from "../images/Abstract.jpg";
import Bgmi from "../images/bgmi.jpg";
import card1 from "../images/cdfu.jpg"
import card2 from "../images/cdfu1.jpg"
import card3 from "../images/royalrum.jpg"

const events = [
	{
		title: "CODE FUSION",
		subtitle: "For the Students , by the Students",
		description: "This programming competition will put its participants into a test by making them come up with static websites and dynamic designs, so as to bring up solutions to modern day proble ",
		link: "",
		 image: card1, 
		background: Abstract,
		color: "var(--indigo)",
	},
	{
		title: "BGMI TOURNAMENT",
		subtitle: "Rise to Victory in BGMI Arena",
		description: "Join us for an electrifying battleground where skill, strategy, and teamwork reign supreme! Our BGMI Tournament brings together the best players in a thrilling showdown for glory and prizes.",
		href: "",
		 image: card3,
		background: Bgmi,
		color: "var(--indigo)",
	},
	{
		title: "Data Crunch",
		subtitle: "Coding Competition on [Array Stack LinkedList]",
		description: "Data Crunch: Where Code Meets Insight! Get ready to dive into a world of data-driven challenges that will test your coding skills and analytical thinking.",
		href: "",
		image: card2,
		background: skillabhyudayaBG,
		color: "transparent",
		btnText: "Visit Website",
	},
];

export default events;
