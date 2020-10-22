import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const BackgroundGradient = styled.div`
	background: #50a3a2;
	background: -webkit-linear-gradient(top left, #50a3a2 0%, #78cc6d 100%);
	background: linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%);
	position: fixed;
	overflow: hidden;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Bubbles = styled.ul`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Item = styled.li`
	position: absolute;
	list-style: none;
	display: block;
	width: 80px;
	height: 80px;
	background-color: rgba(255, 255, 255, 0.1);
	bottom: -320px;
	-webkit-animation: square 50s infinite;
	animation: square 50s infinite;
	-webkit-transition-timing-function: linear;
	transition-timing-function: linear;
	border-radius: 4px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	-khtml-border-radius: 4px;
	}
	&:nth-child(1) {
		left: 10%;
	}
	&:nth-child(2) {
		left: 20%;
		width: 160px;
		height: 160px;
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
		-webkit-animation-duration: 34s;
		animation-duration: 34s;
	}
	&:nth-child(3) {
		left: 25%;
		-webkit-animation-delay: 4s;
		animation-delay: 4s;
	}
	&:nth-child(4) {
		left: 40%;
		width: 120px;
		height: 120px;
		-webkit-animation-duration: 44s;
		animation-duration: 44s;
	}
	&:nth-child(5) {
		left: 70%;
	}
	&:nth-child(6) {
		left: 80%;
		width: 240px;
		height: 240px;
		-webkit-animation-delay: 3s;
		animation-delay: 3s;
	}
	&:nth-child(7) {
		left: 32%;
		width: 320px;
		height: 320px;
		-webkit-animation-delay: 7s;
		animation-delay: 7s;
	}
	&:nth-child(8) {
		left: 55%;
		width: 40px;
		height: 40px;
		-webkit-animation-delay: 15s;
		animation-delay: 15s;
		-webkit-animation-duration: 80s;
		animation-duration: 80s;
	}
	&:nth-child(9) {
		left: 25%;
		width: 20px;
		height: 20px;
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
		-webkit-animation-duration: 80s;
		animation-durat
	}
	&:nth-child(10) {
		left: 90%;
		width: 320px;
		height: 320px;
		-webkit-animation-delay: 22s;
		animation-delay: 22s;
	}
`;

const Background: FunctionComponent = () => (
	<BackgroundGradient>
		<Bubbles>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</Bubbles>
	</BackgroundGradient>
);

export default Background;
