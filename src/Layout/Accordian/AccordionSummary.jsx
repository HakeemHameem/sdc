import React from "react";
import MaterialIcons from "../../components/MaterialIcons";

const AccordionSummary = ({ onClick, children }) => {
	return (
		<div className="accordian-header" onClick={onClick}>
			<div className="accordian-header-content">{children}</div>
			<div className="accordian-header-icon">
				<MaterialIcons>expand_less</MaterialIcons>
			</div>
		</div>
	);
};

export default AccordionSummary;
