import React, { FunctionComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	backgroundGradient: {
		background: 'linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)',
		position: 'fixed',
		overflow: 'hidden',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
	bgBubbles: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},

	bgBubblesLi: {
		position: 'absolute',
		listStyle: 'none',
		display: 'block',
		width: 80,
		height: 80,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		bottom: -320,
		animation: 'square 50s infinite',
		transitionTimingFunction: 'linear',
		borderRadius: 4,
	},

	bgBubblesLi1: {
		left: '10%',
	},

	bgBubblesLi2: {
		left: '20%',
		width: 160,
		height: 160,
		animationDelay: '2s',
		animationDuration: '34s',
	},

	bgBubblesLi3: {
		left: '25%',
		animationDelay: '4s',
	},

	bgBubblesLi4: {
		left: '40%',
		width: 120,
		height: 120,
		animationDuration: '44s',
	},

	bgBubblesLi5: {
		left: '70%',
	},

	bgBubblesLi6: {
		left: '80%',
		width: 240,
		height: 240,
		animationDelay: '3s',
	},

	bgBubblesLi7: {
		left: '32%',
		width: 320,
		height: 320,
		animationDelay: '7s',
	},

	bgBubblesLi8: {
		left: '55%',
		width: 40,
		height: 40,
		animationDelay: '15s',
		animationDuration: '80s',
	},

	bgBubblesLi9: {
		left: '25%',
		width: 20,
		height: 20,
		animationDelay: '2s',
		animationDuration: '80s',
	},

	bgBubblesLi10: {
		left: '90%',
		width: 320,
		height: 320,
		animationDelay: '22s',
	},
});

const Background: FunctionComponent = () => (
	<div className={css(styles.backgroundGradient)}>
		<ul className={css(styles.bgBubbles)}>
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi1)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi2)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi3)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi4)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi5)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi6)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi7)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi8)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi9)} />
			<li className={css(styles.bgBubblesLi, styles.bgBubblesLi10)} />
		</ul>
	</div>
);

export default Background;
