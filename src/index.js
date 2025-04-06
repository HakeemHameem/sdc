import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalProvider } from "./Context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<GlobalProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</GlobalProvider>
);
