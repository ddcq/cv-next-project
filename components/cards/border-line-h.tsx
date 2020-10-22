import styled from 'styled-components';

const BorderLineH = styled.div`
    &:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 1px;
	background: -moz-radial-gradient(left, ellipse cover, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
	background: -webkit-radial-gradient(left, ellipse cover, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
	background: radial-gradient(ellipse at left, rgba(197, 202, 213, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
`;

export default BorderLineH;
