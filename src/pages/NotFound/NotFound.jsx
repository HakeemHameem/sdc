import React, { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import GlobalContext from "../../Context/GlobalContext";
import ostrich from "../../images/ostrich.png";
import "./not-found.css";

const NotFound = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--black)",
		});
	}, [setHeaderStyle]);

	return (
		<main className="not-found">
			<section
				className="not-found-image"
				style={{ backgroundImage: `url(${ostrich})` }}
			></section>
			<section className="not-found-content">
				<h2>Oops! Error 404</h2>
				<h3>Couldn't find the page you are looking for...</h3>
				<div className="not-found-content-buttons">
					<Button text="Back to Home" link="/" />
					<Button
						text="Contact Us"
						link="/contact"
						variant="outline"
					/>
				</div>
			</section>
		</main>
	);
};

export default NotFound;
