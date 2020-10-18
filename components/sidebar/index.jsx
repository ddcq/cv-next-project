/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../redux/actions';
import { selectSidebarVisible } from '../../redux/selectors';

const Sidebar = ({ children, id }) => {
	const sidebarVisible = useSelector(selectSidebarVisible);
	return sidebarVisible === id && <ContentSidebar>{children}</ContentSidebar>;
};

const ContentSidebar = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();
	const sidebarContainer = document.getElementById('sidebar-container');
	useEffect(() => {
		setVisible(true);
		$('.s_overlay').fadeIn();
	}, []);
	$('body,html').addClass('sidebar-open');

	const handleClose = () => {
		setVisible(false);
		$('.s_overlay').fadeOut();
		$('body,html').removeClass('sidebar-open');
		setTimeout(() => dispatch(hideSidebar()), 300);
	};
	return ReactDOM.createPortal(
		<>
			<div className="s_overlay" onClick={handleClose}></div>
			<div className={cn('content-sidebar', visible && 'active')}>
				<div className="sidebar-wrap search-form">
					<aside id="secondary" className="widget-area">
						{children}
					</aside>
				</div>
				<span className="close" onClick={handleClose}></span>
			</div>
		</>,
		sidebarContainer
	);
};

export default Sidebar;
