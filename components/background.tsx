import React, { FunctionComponent } from 'react';

const Background: FunctionComponent = () => (
	<div className="background gradient">
		<ul className="bg-bubbles">{new Array(10).fill(<li />)}</ul>
	</div>
);

export default Background;
