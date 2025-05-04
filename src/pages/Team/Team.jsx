import React, { useContext, useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Card from "../../components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import Ellipse from "../../images/Ellipse";
import group from "../../images/group.svg";
import Row, { Col } from "../../Layout/Responsive";
import "./team.css";
import 'react-vertical-timeline-component/style.min.css';
import { TeamData } from "../../utils/team"; 


const Team = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({ color: "var(--black)" });
	}, [setHeaderStyle]);
	return (
		<main className="team">
			<TeamHero />
			<section className="team-timeline">
				<Timeline />
			</section>
		</main>
	);
};

export default Team;

const sampleTeamData = {
	2023: {
		Tech: [
			{ name: "John Doe", role: "Developer", image: "" },
			{ name: "Jane Smith", role: "Designer", image: "" },
		],
		Media: [
			{ name: "Alice Johnson", role: "Photographer", image: "" },
		],
		Content: [
			{ name: "Bob Williams", role: "Writer", image: "" },
		],
	},
	2024: {
		Tech: [
			{ name: "Eva Brown", role: "Developer", image: "" },
		],
		Media: [
			{ name: "Charlie Davis", role: "Videographer", image: "" },
		],
		Content: [
			{ name: "Diana Miller", role: "Editor", image: "" },
		],
	},
	2025: {
		Tech: [
			{ name: "Frank Wilson", role: "Developer", image: "" },
		],
		Media: [
			{ name: "Grace Taylor", role: "Content Creator", image: "" },
		],
		Content: [
			{ name: "Henry Anderson", role: "Blogger", image: "" },
		],
	},
};

const Timeline = () => {
	return (
		<VerticalTimeline>
			{Object.keys(sampleTeamData).map((year) => (
				<VerticalTimelineElement
					key={year}
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date={year}
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				>
					<AnimatedExpandableContent year={year} yearData={sampleTeamData[year]} />
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
};

const AnimatedExpandableContent = ({ year, yearData }) => {
	return (
		<div className="expandable-content">
			{yearData &&
				Object.keys(yearData).map((teamName, index) => (
					<div className="team-group" key={index}>
						<h2>{teamName}</h2>
						<Row>
							{yearData[teamName].map((person, index) => (
								<Col lg={33} md={50} sm={100} key={index}>
									<Card {...person} />
								</Col>
							))}
						</Row>
					</div>
				))}
		</div>
	);
};

const TeamHero = () => {
	return (
		<>
		
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
		</>
	);
};

