import React from "react";

const Dots = ({ fill = "#233651", className, ...rest }) => {
	return (
		<svg
			width="90"
			height="90"
			viewBox="0 0 90 90"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<rect width="10" height="10" fill={fill} />
			<rect y="20" width="10" height="10" fill={fill} />
			<rect y="40" width="10" height="10" fill={fill} />
			<rect y="60" width="10" height="10" fill={fill} />
			<rect y="80" width="10" height="10" fill={fill} />
			<rect x="20" width="10" height="10" fill={fill} />
			<rect x="20" y="20" width="10" height="10" fill={fill} />
			<rect x="20" y="40" width="10" height="10" fill={fill} />
			<rect x="20" y="60" width="10" height="10" fill={fill} />
			<rect x="20" y="80" width="10" height="10" fill={fill} />
			<rect x="40" width="10" height="10" fill={fill} />
			<rect x="40" y="20" width="10" height="10" fill={fill} />
			<rect x="40" y="40" width="10" height="10" fill={fill} />
			<rect x="40" y="60" width="10" height="10" fill={fill} />
			<rect x="40" y="80" width="10" height="10" fill={fill} />
			<rect x="60" width="10" height="10" fill={fill} />
			<rect x="60" y="20" width="10" height="10" fill={fill} />
			<rect x="60" y="40" width="10" height="10" fill={fill} />
			<rect x="60" y="60" width="10" height="10" fill={fill} />
			<rect x="60" y="80" width="10" height="10" fill={fill} />
			<rect x="80" width="10" height="10" fill={fill} />
			<rect x="80" y="20" width="10" height="10" fill={fill} />
			<rect x="80" y="40" width="10" height="10" fill={fill} />
			<rect x="80" y="60" width="10" height="10" fill={fill} />
			<rect x="80" y="80" width="10" height="10" fill={fill} />
		</svg>
	);
};

export default Dots;
