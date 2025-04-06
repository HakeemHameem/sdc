import React, { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import Ellipse from "../../images/Ellipse";
import group from "../../images/group.svg";
import Row, { Col } from "../../Layout/Responsive";
import team from "../../utils/team";
import "./team.css";

const Team = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({ color: "var(--black)" });
	}, [setHeaderStyle]);
	return (
		<main className="team">
			<section className="team-hero">
				<Dots className="team-hero-dots" data-index="1" />
				<Dots className="team-hero-dots" data-index="2" />
				<Ellipse className='team-hero-ellipse' />
				<span className="team-circles"></span>
				<div className="team-hero-head">
					<span>Meet Our Team</span>
					<span>
						Our expert team is made up of creatives with technical
						knowhow, strategists who think outside the box and
						people who push beyond innovation.
					</span>
				</div>
				<div className="team-hero-body">
					<img src={group} alt="Group" />
				</div>
			</section>
			<section className="team-people">
				{team.map(
					(group, id) =>
						group.members.length > 0 && (
							<div className="team-group" key={id}>
								<h2>{group.title}</h2>
								<Row>
									{group.members.map((person, index) => (
										<Col
											lg={33}
											md={50}
											sm={100}
											key={index}
										>
											<Card {...person} />
										</Col>
									))}
								</Row>
							</div>
						)
				)}
			</section>
		</main>
	);
};

export default Team;
