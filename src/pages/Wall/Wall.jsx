import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import events from "../../utils/events";
import Card from "./Card";
import "./wall.css";
import "../Home/home.css";
import achievements from "../../utils/achievments";
import Achievement from "./Achievement";
import Row, { Col } from "../../Layout/Responsive";

const Wall = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--black)",
		});
	}, [setHeaderStyle]);

	return (
		<main className="wall">
			<section className="wall-events">
				<div
					className="wall-head wall-events-head"
					data-aos="fade-right"
				>
					<h1>
						Past Events
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="wall-events-body">
					{events.map((event, id) => (
						<Card {...event} key={id} />
					))}
				</div>
			</section>
			<section className="wall-events">
				<div
					className="wall-head wall-events-head"
					data-aos="fade-left"
				>
					<h1>
						Upcoming Events
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="wall-events-body">
					<Row>
						{achievements.map((achievement, id) => (
							<Col lg={33} md={50} sm={100} key={id}>
								<Achievement {...achievement} />
							</Col>
						))}
					</Row>
				</div>
			</section>
		</main>
	);
};

export default Wall;
