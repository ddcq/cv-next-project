import React, { FunctionComponent } from 'react';

const Title: FunctionComponent = ({ children }) => (
	<div className="title">
		<div className="first-letter">{children}</div>
	</div>
);
export default Title;
