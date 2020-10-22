import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Title from '../title';

const MapContainer = styled.div`
	margin: 0 0 30px 0;
	height: 240px;
`;

const AlertSuccess = styled.div`
	display: none;
`;

const AlertSuccessText = styled.p`
	margin: 0px;
	font-size: 17px;
`;

const ContactsCard: FunctionComponent = () => (
	<div className="card-wrap">
		<div className="content contacts">
			<Title>Get in Touch</Title>
			<div className="row">
				<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
					<MapContainer>
						<img alt="map" src="images/map.jpg" width="641px" />
					</MapContainer>
					<div className="info-list">
						<ul>
							<li>
								<strong>Address . . . . .</strong> Quiers (77), FRANCE
							</li>
							<li>
								<strong>Email . . . . .</strong> forhimandus@gmail.com
							</li>
							<li>
								<strong>Phone . . . . .</strong> +33 6 30 26 68 16
							</li>
							<li>
								<strong>Google Meet . . . . .</strong> forhimandus@gmail.com
							</li>
						</ul>
					</div>
				</div>
				<div className="clear"></div>
			</div>
		</div>

		<div className="content contacts">
			<Title>Contact Form</Title>
			<div className="row">
				<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
					<div className="contact_form">
						<form id="cform" method="post">
							<div className="row">
								<div className="col col-d-6 col-t-6 col-m-12">
									<div className="group-val">
										<input type="text" name="name" placeholder="Full Name" />
									</div>
								</div>
								<div className="col col-d-6 col-t-6 col-m-12">
									<div className="group-val">
										<input type="text" name="email" placeholder="Email Address" />
									</div>
								</div>
								<div className="col col-d-12 col-t-12 col-m-12">
									<div className="group-val">
										<textarea name="message" placeholder="Your Message"></textarea>
									</div>
								</div>
							</div>
							<div className="align-left">
								<button
									className="button"
									onClick={() => {
										//$('#cform').submit();
										return false;
									}}
								>
									<span className="text">Send Message</span>
									<span className="arrow"></span>
								</button>
							</div>
						</form>
						<AlertSuccess>
							<AlertSuccessText>Thanks, your message is sent successfully.</AlertSuccessText>
						</AlertSuccess>
					</div>
				</div>
				<div className="clear"></div>
			</div>
		</div>
	</div>
);

export default ContactsCard;
