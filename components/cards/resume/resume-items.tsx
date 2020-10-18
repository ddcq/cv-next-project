import React, { FunctionComponent } from 'react';

type ResumeItemsProps = {
	title: string;
	icon: string;
};

const ResumeItems: FunctionComponent<ResumeItemsProps> = ({ children, title, icon }) => (
	<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
		<div className="resume-title border-line-h">
			<div className="icon">
				<i className={'fa fa-' + icon}></i>
			</div>
			<div className="name">{title}</div>
		</div>
		<div className="resume-items">{children}</div>
	</div>
);
export default ResumeItems;
