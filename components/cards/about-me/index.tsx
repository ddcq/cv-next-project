import React, { FunctionComponent } from 'react';
import Title from '../../title';
import Clients from './clients';
import Quote from './quote';

const birthday = +new Date(1976, 7, 20);
const age = ~~((Date.now() - birthday) / 31557600000);

const AboutMe: FunctionComponent = () => (
	<div className="card-wrap">
		{/* 						About  */}
		<div className="content about">
			{/* title */}
			<Title>About Me</Title>

			{/* content */}
			<div className="row">
				<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
					<div className="text-box">
						<p>
							Je m&apos;appelle Denis Declercq. Je me destine à être un développeur fullstack React.js /
							Node.js from Quiers(77). Avec près de 20 ans d&apos;expérience dans les technologies JEE,
							j&apos;ai pu suivre l&apos;évolution des nouvelles technologies. J&apos;ai gardé de mes
							premières années le soucis d&apos;un code clair, le plus optimisé possible et dimensionné au
							besoin.
						</p>
					</div>
				</div>
				<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
					<div className="info-list">
						<ul>
							<li>
								<strong>Age . . . . .</strong> {age}
							</li>
							<li>
								<strong>Look for . . . . .</strong> CDI in final client
							</li>
							<li>
								<strong>Search zone . . . . .</strong> Near Gare de l&apos;Est
							</li>
							<li>
								<strong>Address . . . . .</strong> Quiers (77), FRANCE
							</li>
						</ul>
					</div>
				</div>
				<div className="clear"></div>
			</div>
		</div>
		<Clients />
		<Quote />
	</div>
);

export default AboutMe;
