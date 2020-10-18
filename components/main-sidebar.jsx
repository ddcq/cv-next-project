import React from 'react';
import Sidebar from './sidebar';
import Widget from './sidebar/widget';
import WidgetTitle from './sidebar/widget-title';

const MainSidebar = () => (
	<Sidebar id="MainSidebar">
		<Widget className="widget_recent_entries">
			<WidgetTitle>Recent Post</WidgetTitle>
		</Widget>
		<section className="widget widget_recent_comments">
			<WidgetTitle>Recent Comments</WidgetTitle>
		</section>
		<section className="widget widget_archive">
			<WidgetTitle>Archives</WidgetTitle>
		</section>
		<section className="widget widget_categories">
			<WidgetTitle>Categories</WidgetTitle>
		</section>
		<section className="widget widget_meta">
			<h2 className="widget-title">
				<span className="widget-title-span">
					<span className="first-letter">Meta</span>
				</span>
			</h2>
		</section>
	</Sidebar>
);

export default MainSidebar;
