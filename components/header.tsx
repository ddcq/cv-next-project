import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from '../hooks/use-window-size';

const HeaderContainer = styled.header`
	margin-right: 8px;
	position: relative;
	left: 0;
	top: 15px;
	float: left;
	width: 72px;
	z-index: 100;
	text-align: center;
	opacity: 1;
	visibility: visible;
	border-radius: 4px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	-khtml-border-radius: 4px;
	@media (max-width: 1023px) {
		position: fixed;
		left: 0;
		top: -4px;
		width: 100%;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 560px) {
		padding: 0 5px;
		width: 100%;
	}
`;

const TopMenu = styled.div`
	width: 100%;
	font-size: 0;
	@media (max-width: 1023px) {
		margin: 0 auto;
		max-width: 540px;
		display: flex;
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
	}
	@media (max-width: 560px) {
		max-width: 100%;
	}
`;
const MenuItems = styled.ul`
	@media (max-width: 1023px) {
		display: flex;
		width: 100%;
	}
`;

type MenuItemProps = {
	active: boolean;
};
const MenuItem = styled.li<MenuItemProps>`
	display: block;
	transition: color 0.3s ease 0s;
	-moz-transition: color 0.3s ease 0s;
	-webkit-transition: color 0.3s ease 0s;
	-o-transition: color 0.3s ease 0s;
	@media (max-width: 1023px) {
		display: block;
		width: 100%;
		:first-child a {
			border-radius: 4px 0 0 4px;
			-moz-border-radius: 4px 0 0 4px;
			-webkit-border-radius: 4px 0 0 4px;
			-khtml-border-radius: 4px 0 0 4px;
		}
		:last-child a {
			border-radius: 0 4px 4px 0;
			-moz-border-radius: 0 4px 4px 0;
			-webkit-border-radius: 0 4px 4px 0;
			-khtml-border-radius: 0 4px 4px 0;
		}
		a:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			width: 1px;
			height: 100%;
			background: -moz-radial-gradient(
				top,
				ellipse cover,
				rgba(197, 202, 213, 0.7) 0%,
				rgba(255, 255, 255, 0) 70%
			);
			background: -webkit-radial-gradient(
				top,
				ellipse cover,
				rgba(197, 202, 213, 0.7) 0%,
				rgba(255, 255, 255, 0) 70%
			);
			background: radial-gradient(ellipse at top, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
		}
		:last-child a:before {
			display: block;
		}
	}
	:first-child a {
		border-radius: 4px 4px 0 0;
		-moz-border-radius: 4px 4px 0 0;
		-webkit-border-radius: 4px 4px 0 0;
		-khtml-border-radius: 4px 4px 0 0;
	}
	:last-child a {
		border-radius: 0 0 4px 4px;
		-moz-border-radius: 0 0 4px 4px;
		-webkit-border-radius: 0 0 4px 4px;
		-khtml-border-radius: 0 0 4px 4px;
		border: none;
	}
	:last-child a:before {
		display: none;
	}
	color: ${(props) => (props.active ? '#78cc6d' : '#171717')};
	:hover {
		color: #78cc6d;
	}
`;

const MenuItemLnk = styled.a`
	color: inherit;
	padding: 10px 0 14px 0;
	height: auto;
	position: relative;
	overflow: hidden;
	display: block;
	text-align: center;
	background: #ffffff;
	:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: -moz-radial-gradient(right, ellipse cover, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
		background: -webkit-radial-gradient(
			right,
			ellipse cover,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
		background: radial-gradient(ellipse at right, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
	}
	@media (max-width: 1023px) {
		padding-bottom: 0;
		height: 75px;
	}
`;
const MenuItemIcon = styled.span`
	color: inherit;
	margin: 0 auto;
	position: relative;
	top: 0;
	left: 0;
	height: auto;
	line-height: normal;
	width: 40px;
	font-size: 20px;
	border-radius: 30px;
	-moz-border-radius: 30px;
	-webkit-border-radius: 30px;
	-khtml-border-radius: 30px;
	transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
`;

const MenuItemLinkText = styled.span`
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	line-height: 13px;
	display: block;
	font-size: 11px;
	font-weight: 500;
	text-transform: uppercase;
	transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
`;

const MenuBtn = styled.a`
	margin-bottom: 8px;
	position: relative;
	display: block;
	height: 72px;
	text-align: center;
	background: #ffffff;
	border-radius: 4px;
	-webkit-border-radius: 4px;
	z-index: 2;
	:hover span,
	:hover span:before,
	:hover span:after {
		background: #78cc6d;
	}
	:hover span:before,
	:hover span:after {
		width: 100%;
	}
	@media (max-width: 560px) {
		position: absolute;
		right: 0;
		top: 0;
		width: 62px;
		height: 62px;
	}
`;

const MenuBtnIcon = styled.span`
	margin-left: -13px;
	margin-top: -1px;
	position: absolute;
	left: 50%;
	top: 50%;
	display: block;
	width: 26px;
	height: 2px;
	background: #323232;
	transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	:before,
	:after {
		content: '';
		position: absolute;
		left: 0;
		top: -7px;
		width: 80%;
		height: 100%;
		background: #323232;
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-o-transition: all 0.3s ease 0s;
	}
	:after {
		top: auto;
		bottom: -7px;
		width: 60%;
	}
`;

const Profile = styled.div`
	background: #ffffff;
	padding: 10px 2px 10px 18px;
	width: auto;
	height: 64px;
	text-align: left;
`;
const ProfileTitle = styled.div`
	font-size: 15px;
	color: #323232;
	font-weight: 500;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
const ProfileSubtitle = styled.div`
	font-size: 12px;
	color: #78cc6d;
	line-height: 14px;
	font-weight: 400;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;

const LINKS = [
	{
		href: '#about-card',
		icon: 'person',
		text: 'About',
	},
	{
		href: '#resume-card',
		icon: 'android-list',
		text: 'Resume',
	},
	// {
	//   href: "#works-card",
	//   icon: "paintbrush",
	//   text: "Works",
	// },
	// {
	//   href: "#blog-card",
	//   icon: "chatbox-working",
	//   text: "Works",
	// },
	{
		href: '#contacts-card',
		icon: 'at',
		text: 'Contact',
	},
];

type HeaderProps = {
	onMenuBtnClick: () => void;
	onActiveCard: (id: string) => void;
};
const Header: FunctionComponent<HeaderProps> = ({ onMenuBtnClick, onActiveCard }) => {
	const { width = 0 } = useWindowSize();
	const [activeCard, setActiveCard] = useState(LINKS[0].href);
	const handleClick = (id: string) => {
		//const card_item = $(id);

		if (width < 1024) {
			//const h = parseFloat(card_item.offset().top);
			//$("body,html").animate({ scrollTop: h - 76 }, 800);
		} else {
			if (activeCard !== id) {
				setActiveCard(id);
				onActiveCard(id);
			}
		}
	};
	return (
		<HeaderContainer>
			{width < 560 && (
				<Profile>
					<ProfileTitle>Denis Declercq</ProfileTitle>
					<ProfileSubtitle>Fullstack Developper</ProfileSubtitle>

					{/*
			  <div className="subtitle subtitle-typed">
                <div className="typing-title">
                  <p>Fullstack Devoloper React.js / Node.js</p>
                  <p>Developer</p>
                  <p>Freelancer</p>
                </div>
			  </div>
			  */}
				</Profile>
			)}
			<MenuBtn onClick={() => onMenuBtnClick()}>
				<MenuBtnIcon />
			</MenuBtn>
			<TopMenu>
				<MenuItems>
					{LINKS.map((l) => (
						<MenuItem key={l.text} active={activeCard === l.href}>
							<MenuItemLnk href={l.href} onClick={() => handleClick(l.href)}>
								<MenuItemIcon className={'ion-' + l.icon} />
								<MenuItemLinkText>{l.text}</MenuItemLinkText>
							</MenuItemLnk>
						</MenuItem>
					))}
				</MenuItems>
			</TopMenu>
		</HeaderContainer>
	);
};

export default Header;
