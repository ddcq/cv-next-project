import React, { FunctionComponent } from 'react';
import cn from 'classnames';

type WidgetProps = {
	className?: string;
	id: string;
};

const Widget: FunctionComponent<WidgetProps> = ({ className, children, id }) => (
	<section id={id} className={cn('widget', className)}>
		{children}
	</section>
);

export default Widget;
