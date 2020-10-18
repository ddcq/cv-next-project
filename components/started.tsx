import React, { FunctionComponent } from 'react';
const Started: FunctionComponent = () => (
	<div className="card-started" id="home-card">
		<div className="profile no-photo">
			<div className="slide" style={{ backgroundImage: 'url(header.jpg)' }} />

			<div className="title">Denis Declercq</div>
			<div className="subtitle">Fullstack Devoloper React.js / Node.js</div>
			{/*
					  <div className="subtitle subtitle-typed">
						  <div className="typing-title">
							  <p>Fullstack Devoloper React.js / Node.js</p>
							  <p>Developer</p>
							  <p>Freelancer</p>
						  </div>
					  </div>
					  */}
			<div className="social">
				<a target="_blank" rel="noreferrer" href="https://twitter.com/trotipette">
					<span className="fa fa-twitter"></span>
				</a>
				<a target="_blank" rel="noreferrer" href="https://github.com/ddcq">
					<span className="fa fa-github"></span>
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/denis-declercq-bb6b298/">
					<span className="fa fa-linkedin"></span>
				</a>
			</div>

			<div className="lnks">
				<a href="http://ddcq.github.io/resume/CV - Denis Declercq.docx" className="lnk">
					<span className="text">Download CV</span>
				</a>
				<a href="#contacts-card" className="lnk discover">
					<span className="text">Contact Me</span>
				</a>
			</div>
		</div>
	</div>
);
export default Started;

// $(".lnks").on("click", ".lnk.discover", function () {
//   $('.top-menu a[href="#contacts-card"]').trigger("click");
// });
