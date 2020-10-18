import React from 'react';
import { FunctionComponent } from 'react';
import Title from '../../title';

type ClientItemProps = {
	src: string;
	url: string;
	name: string;
};

const ClientItem: FunctionComponent<ClientItemProps> = ({ src, url, name }) => (
	<div className="col col-d-3 col-t-3 col-m-6 border-line-v">
		<div className="client-item">
			<div className="image">
				<a rel="noreferrer" target="_blank" href={url} title={name}>
					<img src={src} alt={name} />
				</a>
			</div>
		</div>
	</div>
);

const Clients: FunctionComponent = () => (
	<div className="content clients">
		{/* title */}
		<Title>Clients</Title>

		{/* content */}
		<div className="row client-items">
			<ClientItem name="Evenium" src="images/clients/evenium-logo.jpg" url="https://corp.evenium.com" />
			<ClientItem name="Texa" src="images/clients/texaservice.png" url="https://www.texa.fr" />
			<ClientItem name="SQLI" src="images/clients/sqli.png" url="https://www.sqli.com" />
			<ClientItem
				name="Altelios Technology"
				src="images/clients/altelios-technology.png"
				url="https://www.alteliostechnologygroup.com"
			/>
			<ClientItem name="Adex" src="images/clients/adex.png" url="images/clients/aubay.png" />
			<div className="clear"></div>
		</div>
	</div>
);
export default Clients;
