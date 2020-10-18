import React, { FunctionComponent } from 'react';
import Title from '../../title';

const Quote: FunctionComponent = () => (
	<div className="content quote">
		{/* title */}
		<Title>Quote</Title>

		{/* content */}
		<div className="row">
			<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
				<div className="revs-item">
					<div className="text">
						<div>
							Un programme en C retourne un code, 0 quand tout va bien, ou un nombre entre 1 et 255 quand
							une erreur s&apos;est produite. Notez alors qu&apos;il y a 255 fois plus de chance que ça se
							passe mal.
						</div>
					</div>
					<div className="user">
						<div className="img">
							<img src="queinnec2002.png" alt="Denis Declercq" />
						</div>
						<div className="info">
							<div className="name">Christian Queinnec</div>
							<div className="company">Professeur émérite à l&apos;UPMC</div>
						</div>
						<div className="clear"></div>
					</div>
				</div>
			</div>
			<div className="clear"></div>
		</div>
	</div>
);
export default Quote;
