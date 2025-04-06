import React, { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const mediaQuerySm = window.matchMedia("(max-width: 672px)");
	const mediaQueryMd = window.matchMedia("(max-width: 880px)");
	const mediaQueryLg = window.matchMedia("(min-width: 880px)");
	const breakpoint = (device) => {
		if (device === "mobile") return mediaQuerySm.matches;
		else if (device === "tab") return mediaQueryMd.matches;
		else return mediaQueryLg.matches;
	};
	mediaQuerySm.addListener(breakpoint);
	mediaQueryMd.addListener(breakpoint);
	mediaQueryLg.addListener(breakpoint);
	const [isLoading, setIsLoading] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const [headerStyle, setHeaderStyle] = useState({ color: "var(--white)" });
	return (
		<GlobalContext.Provider
			value={{
				isLoading,
				setIsLoading,
				breakpoint,
				headerStyle,
				setHeaderStyle,
				openNav,
				setOpenNav,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
