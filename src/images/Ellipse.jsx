import React from "react";

const Ellipse = ({ fill = "#8ab7f9", className, ...rest }) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<circle cx="20" cy="20" r="20" fill={fill} />
		</svg>
	);
};

export default Ellipse;
