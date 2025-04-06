import React, { useContext, useEffect, useState } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import "./progothon.css";
import progothonBG from "../../images/progothon.jpg";
import Accordian from "../../Layout/Accordian/Accordian";
import Row, { Col } from "../../Layout/Responsive";
import ScrllToTop from "../../components/ScrollToTop/ScrllToTop";
import gold from "../../images/gold.svg";
import silver from "../../images/silver.svg";
import bronze from "../../images/bronze.svg";
import merakiLogo from "../../images/meraki.png";

const Progothon = () => {
	const { setHeaderStyle, breakpoint } = useContext(GlobalContext);
	const [asideBar, setAsideBar] = useState({
		style: {
			position: "unset",
			top: 0,
			left: 0,
			backgroundColor: "var(--pink)",
			color: "var(--white)",
		},
		index: "01",
		title: "About",
	});
	const [scheduleId, setScheduleId] = useState(0);
	const vh = window.innerHeight / 100;
	const faqs = [
		{
			question: "How many participants per team are allowed?",
			answer: "Maximum 3 participants in each team.",
		},
		{
			question: "Can a team consist of students from different colleges?",
			answer: "No, each member must be from the same college.",
		},
		{
			question: "Are there any restrictions on branches?",
			answer: "No, participants can be from any branch.",
		},
		{
			question:
				"Does each team member in a team be from the same year of college?",
			answer: "No, the team can be made up of members from different years.",
		},
		{
			question: "How long will this Prog-a-thon run?",
			answer: "Its duration is 48 hours.",
		},
		{
			question: "Will Prog-a-thon be conducted online or offline?",
			answer: "It is an offline/In-Person Hackathon.",
		},
	];
	const schedule = [
		{
			date: "27",
			month: "Sept",
			day: "Tuesday",
			time: "15.00 - 17.00",
			description:
				"Distribution of IDs to all participants and event coordinators.",
			color: "brown",
		},
		{
			date: "27-28",
			month: "Sept",
			day: "Tuesday-Wednesday",
			time: "17.00 - 08.00",
			description: "First day of Prog-a-thon",
			color: "blue",
		},
		{
			date: "28-29",
			month: "Sept",
			day: "Wednesday-Thursday",
			time: "17.00 - 08.00",
			description: "Second day of Prog-a-thon",
			color: "blue",
		},
		{
			date: "29",
			month: "Sept",
			day: "Thursday",
			time: "9.00 - 11.00",
			description:
				"Demonstration of each team's solution and results declaration",
			color: "green",
		},
	];
	const rewards = [
		{
			image: gold,
			name: "Winner",
			amount: "INR 9000/-",
		},
		{
			image: silver,
			name: "Runner Up",
			amount: "INR 6000/-",
		},
		{
			image: bronze,
			name: "2nd Runner Up",
			amount: "INR 3000/-",
		},
	];
	const rules = [
		"The number of members on each participating team is limited to three.",
		"It is a 48-hour In-Person hackathon.",
		"The panel of judges will focus on innovative solutions, technical aspects, working demonstrations, and FAQs.",
		"Each team will have 15 minutes to demonstrate their innovative solutions.",
	];
	useEffect(() => {
		setHeaderStyle({
			color: "var(--white)",
		});
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 100 * vh && window.scrollY < 150 * vh) {
				setAsideBar((p) => ({
					...p,
					index: "01",
					title: "About",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--pink)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 150 * vh &&
				window.scrollY < 250 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "02",
					title: "Rules",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--indigo)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 250 * vh &&
				window.scrollY < 350 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "03",
					title: "Schedule",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--green)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 350 * vh &&
				window.scrollY < 450 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "04",
					title: "Rewards",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--blue)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 450 * vh &&
				window.scrollY < 525 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "05",
					title: "F.A.Q.s",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--yellow)",
						color: "var(--black)",
					},
				}));
			} else {
				setAsideBar((p) => ({
					...p,
					style: {
						...p.style,
						position: "unset",
					},
				}));
			}
		});
	}, [setHeaderStyle, vh]);

	return (
		<main className="progothon">
			<section
				className="progothon-hero"
				style={{
					backgroundImage: `url(${progothonBG})`,
				}}
			>
				<div className="progothon-hero-container">
					<div className="progothon-hero-image">
						<img src={merakiLogo} alt="Meraki" />
					</div>
					<h1>Prog-o-thon</h1>
					<h3>For the students, by the students</h3>
					<div className="progothon-hero-btn">
						<button
							className="progothon-hero-btn"
							onClick={() => {
								window.open(
									"https://forms.gle/4ByyK1qqwhuS3zfi8",
									"_blank"
								);
							}}
						>
							<span>Register Now 🔥</span>
						</button>
						<button
							className="progothon-hero-btn"
							onClick={() => {
								window.scrollTo(0, window.innerHeight);
							}}
						>
							<MaterialIcons>expand_more</MaterialIcons>
							<span>Know More</span>
						</button>
					</div>
				</div>
			</section>
			<main className="progothon-body">
				<aside className="progothon-aside" style={asideBar.style}>
					<div className="progothon-aside-container">
						<span>{asideBar.index}. </span>
						<span>{asideBar.title}</span>
					</div>
				</aside>
				<section className="progothon-body-content">
					<div className="progothon-body-section">
						<h1>About Prog-o-thon</h1>
						<p
							style={{
								width: breakpoint("mobile") ? "95%" : "80%",
								lineHeight: "2rem",
							}}
						>
							In conjunction with the Technical Fest 2022, the
							Indian Institute of Information Technology Una will
							host the first-ever biggest hackathon,
							‘Prog-a-thon’.
							<br />
							Prog-a-thon is a hackathon that aims to solve
							institute-specific problems such as problem
							statements for attendance systems and other
							real-world issues. It is the intent of this
							hackathon to solve real-world problems as well as to
							help students gain teamwork experience, knowledge,
							and motivation to solve problems in their technical
							careers ahead.
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Rules</h1>
						<p>
							<ul>
								{rules.map((rule, id) => (
									<li key={id}>{rule}</li>
								))}
							</ul>
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Schedule</h1>
						<p>
							<div className="progothon-body-schedule">
								<div className="progothon-body-schedule__day">
									{schedule[scheduleId].day}
								</div>
								<div className="progothon-body-schedule__date">
									<span
										style={{
											color: `var(--${schedule[scheduleId].color})`,
										}}
									>
										{schedule[scheduleId].date}
									</span>
									<span>{schedule[scheduleId].month}</span>
								</div>
								<div className="progothon-body-schedule__time">
									<span>{schedule[scheduleId].time}</span>
								</div>
								<div className="progothon-body-schedule__p">
									<span
										style={{
											color: `var(--${schedule[scheduleId].color})`,
										}}
									>
										{schedule[scheduleId].description}
									</span>
								</div>
								<div className="progothon-body-schedule-btns">
									<button
										style={{
											border: `2px solid var(--${schedule[scheduleId].color})`,
											color: `var(--${schedule[scheduleId].color})`,
										}}
										onClick={() =>
											setScheduleId((p) =>
												p === 0
													? schedule.length - 1
													: p - 1
											)
										}
									>
										<MaterialIcons>
											chevron_left
										</MaterialIcons>
									</button>
									<button
										style={{
											border: `2px solid var(--${schedule[scheduleId].color})`,
											color: `var(--${schedule[scheduleId].color})`,
										}}
										onClick={() =>
											setScheduleId(
												(p) => (p + 1) % schedule.length
											)
										}
									>
										<MaterialIcons>
											chevron_right
										</MaterialIcons>
									</button>
								</div>
							</div>
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Rewards</h1>
						<p className="progothon-rewards">
							<Row>
								<Col lg={100} md={100} sm={100}>
									<div className="progothon-reward">
										<img
											src={rewards[0].image}
											alt={rewards[0].name}
											style={{
												width: breakpoint("mobile")
													? "55%"
													: "50%",
											}}
										/>
										<div className="progothon-reward-content">
											<h2>{rewards[0].name}</h2>
											<h4>{rewards[0].amount}</h4>
										</div>
									</div>
								</Col>
								<Col lg={50} md={50} sm={100}>
									<div className="progothon-reward">
										<img
											src={rewards[1].image}
											alt={rewards[1].name}
										/>
										<div className="progothon-reward-content">
											<h2>{rewards[1].name}</h2>
											<h4>{rewards[1].amount}</h4>
										</div>
									</div>
								</Col>
								<Col lg={50} md={50} sm={100}>
									<div className="progothon-reward">
										<img
											src={rewards[2].image}
											alt={rewards[2].name}
										/>
										<div className="progothon-reward-content">
											<h2>{rewards[2].name}</h2>
											<h4>{rewards[2].amount}</h4>
										</div>
									</div>
								</Col>
							</Row>
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Frequnetly Asked Questions</h1>
						<p className="progothon-faqs">
							{faqs.map((faq, id) => (
								<Accordian
									summary={faq.question}
									details={
										<>
											<div>Question: {faq.question}</div>
											<div>Answer: {faq.answer}</div>
										</>
									}
									key={id}
								/>
							))}
						</p>
					</div>
				</section>
			</main>
			<ScrllToTop />
		</main>
	);
};

export default Progothon;
