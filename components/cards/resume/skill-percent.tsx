import cn from 'classnames';
import React, { FunctionComponent } from 'react';

type SkillProps = {
	percentage?: string;
	name: string;
	percent?: boolean;
	circle?: boolean;
};

const Skill: FunctionComponent<SkillProps> = ({ percentage, name, percent, circle }) => (
	<li className="border-line-h">
		<div className="name">{name}</div>
		{percentage && (
			<div className={cn('progress', circle && 'p' + percentage)}>
				{percent && <div className="percentage" style={{ width: percentage + '%' }}></div>}
				{circle && <span>{percentage} %</span>}
			</div>
		)}
	</li>
);

export default Skill;
