import React, { useState } from "react";
import { getIcon, getLink } from "../../utils";
import userFallback from "../../images/user.svg";
import "./card.css";

const Card = ({
	image,
	name,
	title,
	status,
	socials,
	color = "light-blue",
}) => {
	const [userImage, setUserImage] = useState(image);
	return (
		<div
			className="card"
			style={{ backgroundColor: `var(--${color}-100)` }}
		>
			<div className="card-image">
				<img
					src={userImage}
					onError={() => setUserImage(userFallback)}
					alt={name}
					loading="lazy"
				/>
			</div>
			<div className="card-content">
				<div className="card-name">{name}</div>
				<div className="card-title">{title}</div>
				<div className="card-status">{status}</div>
				<div className="card-socials">
					{socials?.map(
						(social, id) =>
							social.username && (
								<a
									href={getLink(
										social.service,
										social.username
									)}
									title={`${social.service}/${social.username}`}
									key={id}
									target="_blank"
									rel="noreferrer"
								>
									{getIcon(social.service)}
								</a>
							)
					)}
				</div>
			</div>
			<span
				className="card-bubble card-bubble-1"
				style={{ backgroundColor: `var(--${color}-700)` }}
			></span>
			<span
				className="card-bubble card-bubble-2"
				style={{ backgroundColor: `var(--${color})` }}
			></span>
		</div>
	);
};

export default Card;
