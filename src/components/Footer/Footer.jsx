// import React, { useState } from "react";
// import "./footer.css";
// import banner from "../../images/banner2.jpg";
// import socials from "../../utils/socials";
// import navLinks from "../../utils/navigation";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";
// import emailjs from "emailjs-com";

// const Footer = () => {
// 	const [user, setUser] = useState({
// 		name: "",
// 		email: "",
// 		message: "",
// 	});
// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setUser((p) => ({ ...p, [name]: value }));
// 	};
// 	const handleSubmit = (e) => {
// 		e?.preventDefault();
// 		emailjs
// 			.sendForm(
// 				process.env.REACT_APP_Service_ID,
// 				process.env.REACT_APP_Email_Template,
// 				e.target,
// 				process.env.REACT_APP_Public_Key
// 			)
// 			.then((res) => console.log(res))
// 			.catch((err) => console.log(err));
// 		setUser({
// 			name: "",
// 			email: "",
// 			message: "",
// 		});
// 	};
// 	return (
// 		<footer
// 			className="footer"
// 			style={{
// 				backgroundImage: `linear-gradient(
// 			to top,
// 			rgba(46, 49, 65, 0.75),
// 			rgba(46, 49, 65, 0.75)
// 		),
// 		url(${banner})`,
// 			}}
// 		>
// 			<div className="footer-head">Get In Touch</div>
// 			<div className="footer-body">
// 				<div className="footer-body-left">
// 					<form
// 						name="contact"
// 						className="footer-form"
// 						onSubmit={handleSubmit}
// 					>
// 						<input
// 							type="text"
// 							placeholder="Type your full name"
// 							required
// 							name="name"
// 							value={user.name}
// 							onChange={handleChange}
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email Address"
// 							required
// 							name="email"
// 							value={user.email}
// 							onChange={handleChange}
// 						/>
// 						<textarea
// 							type="text"
// 							placeholder="Type your message here"
// 							required
// 							rows={5}
// 							name="message"
// 							value={user.message}
// 							onChange={handleChange}
// 						></textarea>
// 						<Button
// 							type="submit"
// 							text="Send Message"
// 							color="white"
// 						/>
// 					</form>
// 				</div>
// 				<div className="footer-body-right">
// 					{socials.map((social, id) => (
// 						<div className="footer-body-right-social" key={id}>
// 							<a
// 								href={social.link}
// 								target="_blank"
// 								rel="noreferrer"
// 							>
// 								<div className="footer-body-right-social__icon">
// 									{social.icon}
// 								</div>
// 								<span className="footer-body-right-social__linktext">
// 									{social.linkText}
// 								</span>
// 							</a>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 			<div className="footer-foot">
// 				<div className="footer-foot-made">
// 					<span>
// 						Made with ❤ by Tech Team 2024
// 					</span>
// 				</div>
// 				<div className="footer-foot-nav">
// 					<nav>
// 						{navLinks.map((nav, id) => (
// 							<Link to={nav.link} key={id}>
// 								{nav.text}
// 							</Link>
// 						))}
// 					</nav>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;
import React, { useState } from "react";
import "./footer.css";
import banner from "../../images/banner2.jpg";
import socials from "../../utils/socials";
import navLinks from "../../utils/navigation";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import emailjs from "emailjs-com";

// Importing contributor images
import c1 from "../../images/Hameem.jpeg";
import c2 from "../../images/Nara.jpg";
// import contributor3 from "../../images/contributors/contributor3.jpg";

const Footer = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [clickedImage, setClickedImage] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((p) => ({ ...p, [name]: value }));
	};

	const handleSubmit = (e) => {
		e?.preventDefault();
		emailjs
			.sendForm(
				process.env.REACT_APP_Service_ID,
				process.env.REACT_APP_Email_Template,
				e.target,
				process.env.REACT_APP_Public_Key
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setUser({
			name: "",
			email: "",
			message: "",
		});
	};

	const handleImageClick = (index) => {
		setClickedImage(index === clickedImage ? null : index);
	};

	return (
		<footer
			className="footer"
			style={{
				backgroundImage: `linear-gradient(
					to top,
					rgba(46, 49, 65, 0.75),
					rgba(46, 49, 65, 0.75)
				),
				url(${banner})`,
			}}
               >
			<div className="footer-head">Get In Touch</div>
			<div className="footer-body">
				<div className="footer-body-left">
					<form name="contact" className="footer-form" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Type your full name"
							required
							name="name"
							value={user.name}
							onChange={handleChange}
						/>
						<input
							type="email"
							placeholder="Email Address"
							required
							name="email"
							value={user.email}
							onChange={handleChange}
						/>
						<textarea
							type="text"
							placeholder="Type your message here"
							required
							rows={5}
							name="message"
							value={user.message}
							onChange={handleChange}
						></textarea>
						<Button type="submit" text="Send Message" color="white" />
					</form>
				</div>
				<div className="footer-body-right">
					{socials.map((social, id) => (
						<div className="footer-body-right-social" key={id}>
							<a href={social.link} target="_blank" rel="noreferrer">
								<div className="footer-body-right-social__icon">
									{social.icon}
								</div>
								<span className="footer-body-right-social__linktext">
									{social.linkText}
								</span>
							</a>
						</div>
					))}
				</div>
			</div>
			<div className="footer-foot">
				<div className="footer-foot-made">
					<span>Contributors</span>
					<div className="contributor-images">
						<img
							src={c1}
							alt="Contributor 1"
							onClick={() => handleImageClick(1)}
							className={clickedImage === 1 ? "clicked" : ""}
						/>
						<img
							src={c2}
							alt="Contributor 2"
							onClick={() => handleImageClick(2)}
							className={clickedImage === 2 ? "clicked" : ""}
						/>
					</div>
				</div>
				<div className="footer-foot-nav">
					<nav>
						{navLinks.map((nav, id) => (
							<Link to={nav.link} key={id}>
								{nav.text}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

