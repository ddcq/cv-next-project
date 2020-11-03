import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Background from '../components/background';
import Header from '../components/header';
import MainSidebar from '../components/main-sidebar';
import Preloader from '../components/preloader';
import Started from '../components/started';
import useScreenInfo from '../hooks/use-screen-info';
import CARDS from '../model/cards';
import { showSidebar } from '../redux/actions';
import { selectCurrentCard } from '../redux/selectors';

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

export default function Home(): ReactElement {
	const dispatch = useDispatch();
	const activeCard = useSelector(selectCurrentCard);
	const { isDesktop } = useScreenInfo();
	return (
		<div className="page">
			<Preloader />
			<Background />
			<div className="container opened">
				<Header onMenuBtnClick={() => dispatch(showSidebar('MainSidebar'))} />
				<Started />
				{CARDS.map((o) =>
					isDesktop ? (
						<CSSTransition key={o.n} in={o === activeCard} timeout={500} unmountOnExit classNames="slide">
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
