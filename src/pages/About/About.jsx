import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import teamwork from "../../images/teamwork.svg";
import Accordian from "../../Layout/Accordian/Accordian";
import faqs from "../../utils/FAQ";
import rules from "../../utils/rules";
import "./about.css";

const About = () => {
	const { setHeaderStyle, breakpoint } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--black)",
		});
	}, [setHeaderStyle]);
	return (
		<main className="home">
			<div
				style={{
					height: "var(--head-height)",
					minHeight: "var(--head-height)",
				}}
			></div>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Who we are?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
					Software Development Club - Forum of Computer Engineers is the association
						of computer science in MVJ College Of Engineering.
					</p>
					<p>
					Our main objective is to encourage open source software,
						improving coding culture, project building and
						introducing new platforms to work on. It provides
						opportunity for students to broaden their knowledge in
						the field of computer science and interact with other
						student who have shared interest.
					</p>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-left">
					<h1>
						What we do?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
					Software Development Club is the association of computer science enthusiasts
						of MVJ College Of Engineering, aimed at lending a helping hand to all the
						beginners in the world of programming.
					</p>
					<p>
					We have number of events to provide students a platform to compete
						against the best of minds.Our other events include short
						and long challenges,technical fests and
						hackathons.
					</p>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Events
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						SDC always organizes many events in different areas.
						Some of the events are given below:
					</p>
					<ul className="home-about-content-ul">
						<li>Workshops</li>
						<li>Career guidance sessions</li>
						<li>Resume reviews</li>
						<li>Coding Events</li>
						<li>Hackathons</li>
					</ul>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-left">
					<h1>
						Workshops
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						We regularly organize workshops over different stacks
						that will be helpful in your entire college life, that
						will cover tech, non-tech and professional events.
					</p>
					<ul className="home-about-content-ul">
						<li>Web Development</li>
						<li>Android Development</li>
						<li>Flutter Development</li>
						<li>React</li>
						<li>Resume Building</li>
						<li>Git and Github</li>
					</ul>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Team Work
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						Software Development Club is all about learning and working as a team. We
						provide equal opportunity while working in a team and it
						is a great experience for everyone.
					</p>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Why should you join us?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<ul className="home-about-content-ul">
						<li>To enhance your CODING SKILLS</li>
						<li>To persue future in FULL STACK DEVELOPMENT </li>
						<li>To excel at GRAPHIC DESIGNING</li>
						<li>To enhance your SPEAKING SKILLS </li>
						<li>To learn TEAMWORK</li>
					</ul>
					{!(breakpoint("mobile") || breakpoint("tab")) && (
						<img
							src={teamwork}
							data-aos="zoom-in"
							alt="Team Work"
							className="home-about-content-joinimg"
						/>
					)}
				</div>
			</section>
			<section
				className="home-about"
				style={{ height: "auto", background: "var(--bgcolor)" }}
			>
				<Dots className="home-about-topimg" />
				<div
					className="home-about-head"
					style={{ justifyContent: "center" }}
					data-aos="fade-right"
				>
					<h1 style={{ margin: "5rem 0 0 0" }}>Code Of Conduct</h1>
				</div>
				<div className="home-about-content">
					<ul
						style={{
							listStyle: "none",
							textAlign: "center",
							fontSize: "1.25rem",
							lineHeight: "1.5rem",
						}}
						className="home-about-content-ul"
					>
						{rules.map((rule, id) => (
							<li className="about-faq-li" key={id}>
								{rule}
								<hr className="about-faq-hr"></hr>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="home-about" style={{ height: "auto" }}>
				<Dots className="home-about-topimg" />
				<div
					className="home-about-head"
					style={{ justifyContent: "center" }}
					data-aos="fade-right"
				>
					<h1 style={{ margin: "5rem 0 0 0" }}>FAQs</h1>
				</div>
				<div
					className="home-about-content"
					style={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						listStyle: "none",
						width: breakpoint("mobile")
							? "100%"
							: breakpoint("tab")
							? "90%"
							: "80%",
					}}
				>
					{faqs.map((faq, id) => (
						<Accordian
							summary={faq.question}
							details={
								<>
									<div>Question : {faq.question}</div>
									<div>Answer : {faq.answer}</div>
								</>
							}
							key={id}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default About;
