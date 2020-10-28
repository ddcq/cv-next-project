import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Background from '../components/background';
import AboutMe from '../components/cards/about-me';
import ContactsCard from '../components/cards/contacts';
import Resume from '../components/cards/resume';
import Header from '../components/header';
import MainSidebar from '../components/main-sidebar';
import Preloader from '../components/preloader';
import Started from '../components/started';
import useScreenInfo from '../hooks/use-screen-info';
import { showSidebar } from '../redux/actions';

const ActiveCardItem = styled.div`
	&.slide-enter {
		transform: translateX(-500px);
		opacity: 0;
	}
	&.slide-enter-active {
		transform: translateX(0);
		opacity: 1;
		transition: all 500ms;
	}
	&.slide-exit {
		transform: translateX(0);
		opacity: 1;
	}
	&.slide-exit-active {
		transform: translateX(-500px);
		opacity: 0;
		transition: all 500ms linear;
	}
`;

const CARDS = [
	{ n: 'about-card', c: <AboutMe /> },
	{ n: 'resume-card', c: <Resume /> },
	//  { n: "works-card", c: <Works /> },
	//  { n: "blog-card", c: <Blog />, cl: "blog" },
	{ n: 'contacts-card', c: <ContactsCard />, cl: 'contacts' },
];

export default function Home(): ReactElement {
	const dispatch = useDispatch();
	const [activeCard, setActiveCard] = useState('about-card');
	const { isDesktop } = useScreenInfo();
	return (
		<div className="page">
			<Preloader />
			<Background />
			<div className="container opened">
				<Header
					onMenuBtnClick={() => dispatch(showSidebar('MainSidebar'))}
					onActiveCard={(id: string) => {
						setActiveCard(id.substr(1));
					}}
				/>
				<Started />
				{CARDS.map((o) =>
					isDesktop ? (
						<CSSTransition key={o.n} in={o.n === activeCard} timeout={500} unmountOnExit classNames="slide">
							<ActiveCardItem className="card-inner active" id={o.n}>
								{o.c}
							</ActiveCardItem>
						</CSSTransition>
					) : (
						<ActiveCardItem className="card-inner active" id={o.n} key={o.n}>
							{o.c}
						</ActiveCardItem>
					)
				)}
			</div>
			<MainSidebar />
			<div id="sidebar-container" />
		</div>
	);
}
