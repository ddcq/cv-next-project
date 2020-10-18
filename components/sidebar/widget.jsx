import React from 'react';
import cn from 'classnames';

const Widget = ({ className, children, id }) => (
	<section id={id} className={cn('widget', className)}>
		{children}
	</section>
);

export default Widget;
