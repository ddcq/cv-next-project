import React, { FunctionComponent } from 'react';

const WidgetTitle: FunctionComponent = ({ children }) => (
	<h2 className="widget-title">
		<span className="widget-title-span">
			<span className="first-letter">{children}</span>
		</span>
	</h2>
);
export default WidgetTitle;
