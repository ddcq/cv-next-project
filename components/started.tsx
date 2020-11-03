import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CONTACT } from '../model/cards';
import { showCard } from '../redux/actions';

const lnksBgColor = '#dddddd 0%, rgba(255, 255, 255, 0) 70%';
const Lnks = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 70px;
	z-index: 10;
	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		background: -moz-radial-gradient(center, ellipse cover, ${lnksBgColor});
		background: -webkit-radial-gradient(center, ellipse cover, ${lnksBgColor});
		background: radial-gradient(ellipse at center, ${lnksBgColor});
	}
`;

const Started: FunctionComponent = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(showCard(CONTACT));
	};
	return (
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

				<Lnks>
					<a href="http://ddcq.github.io/resume/CV - Denis Declercq.docx" className="lnk">
						<span className="text">Download CV</span>
					</a>
					<a href="#contacts-card" className="lnk discover" onClick={handleClick}>
						<span className="text">Contact Me</span>
					</a>
				</Lnks>
			</div>
		</div>
	);
};
export default Started;

// $(".lnks").on("click", ".lnk.discover", function () {
//   $('.top-menu a[href="#contacts-card"]').trigger("click");
// });
