import { css, StyleSheet } from 'aphrodite/no-important';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useEventListener from '../hooks/use-event-listener';

const styles = StyleSheet.create({
	preloader: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		textAlign: 'center',
		background: '#ffffff',
		zIndex: 1000,
	},
	spinner: {
		position: 'relative',
		display: 'inline-block',
		width: 40,
		height: 40,
	},
	doubleBounce: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: '#78cc6d',
		opacity: 1,
		animation: 'sk-bounce 2s infinite ease-in-out',
		borderRadius: '50%',
	},
	doubleBounce2: {
		animationDelay: '-1s',
		opacity: 0.5,
	},
	fadeOutEnter: {
		opacity: 0,
	},
	fadeOutEnterActive: {
		opacity: 1,
		transition: 'opacity 200ms',
	},
	fadeOutExit: {
		opacity: 1,
	},
	fadeOutExitActive: {
		opacity: 0,
		transition: 'opacity 200ms',
	},
});

const PreLoader: FunctionComponent = () => {
	const [inProp, setInProp] = useState(true);
	const handler = useCallback(() => {
		setInProp(false);
	}, [setInProp]);
	useEventListener('load', handler);
	return (
		<CSSTransition
			in={inProp}
			timeout={300}
			classNames={{
				enter: css(styles.fadeOutEnter),
				enterActive: css(styles.fadeOutEnterActive),
				exit: css(styles.fadeOutExit),
				exitActive: css(styles.fadeOutExitActive),
			}}
			unmountOnExit
		>
			<div className={css(styles.preloader)}>
				<div className="centrize full-width">
					<div className="vertical-center">
						<div className={css(styles.spinner)}>
							<div className={css(styles.doubleBounce)} />
							<div className={css(styles.doubleBounce, styles.doubleBounce2)} />
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};
export default PreLoader;
