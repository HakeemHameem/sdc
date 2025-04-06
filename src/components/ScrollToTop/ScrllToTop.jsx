import React from "react";
import MaterialIcons from "../MaterialIcons";
import "./scroll-to-top.css";

const ScrllToTop = () => {
	const vh = window.innerHeight / 100;
	return (
		<>
			{window.scrollY > 100 * vh && (
				<button
					className="scroll-to-top fab"
					title="Scroll To Top"
					onClick={() => window.scrollTo(0, 0)}
				>
					<MaterialIcons>expand_less</MaterialIcons>
				</button>
			)}
		</>
	);
};

export default ScrllToTop;
