import React, { FunctionComponent, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { showSidebar } from '../../../redux/actions';
import Sidebar from '../../sidebar';
import BorderLineH from '../border-line-h';

const ResumeItemContainer = styled(BorderLineH)`
	position: relative;
	padding: 20px 0 20px 0;
	&:after {
		left: -20px;
	}
`;

type DateProps = {
	active: boolean;
};

const Date = styled.div<DateProps>`
	margin: 0 0 10px 0;
	padding: 0;
	position: relative;
	display: inline-block;
	font-size: 11px;
	line-height: 18px;
	color: ${(props) => (props.active ? '#78cc6d' : '#d8dbe2')};
	font-weight: 500;
	text-transform: uppercase;
	border-radius: 4px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	-khtml-border-radius: 4px;
	&:before {
		content: '';
		position: absolute;
		left: -25px;
		top: 4px;
		width: 9px;
		height: 9px;
		background: ${(props) => (props.active ? '#78cc6d' : '#d8dbe2')};
		border-radius: 9px;
		-moz-border-radius: 9px;
		-webkit-border-radius: 9px;
		-khtml-border-radius: 9px;
	}
`;

const Name = styled.div`
	margin: 0;
	font-size: 13px;
	color: #171717;
	font-weight: 500;
	text-transform: uppercase;
`;

const Company = styled.div`
	margin: 0 0 10px 0;
	font-size: 11px;
	color: #999999;
	font-weight: 300;
	text-transform: uppercase;
`;

const Description = styled.p`
	margin: 0;
`;

type ResumeItemProps = {
	date: string;
	name: string;
	company: string;
	description?: string | ReactNode;
};
const ResumeItem: FunctionComponent<ResumeItemProps> = ({ date, name, company, description, children }) => {
	const dispatch = useDispatch();
	return (
		<ResumeItemContainer>
			<Date active>{date}</Date>
			<Name>{name}</Name>
			<Company>{company}</Company>
			<Description>{description}</Description>
			{children && (
				<div>
					<button onClick={() => dispatch(showSidebar(name))}>[détails]</button>
				</div>
			)}
			{children && <Sidebar id={name}>{children}</Sidebar>}
		</ResumeItemContainer>
	);
};
export default ResumeItem;
