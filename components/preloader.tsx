import React, { FunctionComponent, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import useEventListener from '../hooks/use-event-listener';

const Preloader = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	text-align: center;
	background: #ffffff;
	z-index: 1000;
	&.fade-enter {
		opacity: 0;
	}
	&.fade-enter-active {
		opacity: 1;
		transition: opacity 200ms;
	}
	&.fade-exit {
		opacity: 1;
	}
	&.fade-exit-active {
		opacity: 0;
		transition: opacity 200ms;
	}
`;

const Spinner = styled.div`
	position: relative;
	display: inline-block;
	width: 40px;
	height: 40px;
`;
const DoubleBounce = styled.div`
	position: ;absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: #78cc6d;
	opacity: 1;
	animation: sk-bounce 2s infinite ease-in-out;
	borderRadius: 50%;
`;

const DoubleBounce2 = styled(DoubleBounce)`
	animation-delay: -1s;
	opacity: 0.5;
`;

const PreLoader: FunctionComponent = () => {
	const [inProp, setInProp] = useState(true);
	const handler = useCallback(() => {
		setInProp(false);
	}, [setInProp]);
	useEventListener('load', handler);
	return (
		<CSSTransition in={inProp} timeout={300} classnames="fade" unmountOnExit>
			<Preloader>
				<div className="centrize full-width">
					<div className="vertical-center">
						<Spinner>
							<DoubleBounce />
							<DoubleBounce2 />
						</Spinner>
					</div>
				</div>
			</Preloader>
		</CSSTransition>
	);
};
export default PreLoader;
