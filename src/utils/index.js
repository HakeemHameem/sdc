import _ from "lodash";
import {
	GitHub,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	Twitter,
} from "react-feather";

export const getIcon = (a) => {
	switch (_.lowerCase(a)) {
		case "github":
			return <GitHub />;
		case "linkedin":
			return <Linkedin />;
		case "mail":
			return <Mail />;
		case "twitter":
			return <Twitter />;
		case "phone":
			return <Phone />;
		case "instagram":
			return <Instagram />;
		default:
			break;
	}
};

export const getLink = (service, username) => {
	if (_.lowerCase(service) !== "phone" && username.slice(0, 4) === "http")
		return username;
	switch (_.lowerCase(service)) {
		case "github":
			return `https://github.com/${username}`;
		case "linkedin":
			return `https://linkedin.com/in/${username}`;
		case "mail":
			return `mailto:${username}`;
		case "twitter":
			return `https://twitter.com/${username}`;
		case "phone":
			return `tel:${username}`;
		case "instagram":
			return `https://instagram.com/${username}`;
		default:
			break;
	}
};

export const colors = [
	"bgcolor",
	"red",
	"pink",
	"purple",
	"dark-purple",
	"indigo",
	"blue",
	"light-blue",
	"cyan",
	"green",
	"light-green",
	"orange",
	"brown",
	"grey",
	"blue-grey",
];
