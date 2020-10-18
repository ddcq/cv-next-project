import React from 'react';

const WidgetTitle = ({ children }) => (
	<h2 className="widget-title">
		<span className="widget-title-span">
			<span className="first-letter">{children}</span>
		</span>
	</h2>
);
export default WidgetTitle;
