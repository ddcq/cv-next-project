import React, { FunctionComponent } from 'react';
import Title from '../../title';

const Pricing: FunctionComponent = () => (
	<div className="content pricing">
		{/* title */}
		<Title>Pricing</Title>

		{/* content */}
		<div className="row pricing-items">
			{/* pricing item */}
			<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
				<div className="pricing-item">
					<div className="icon">
						<i className="fa fa-battery-half"></i>
					</div>
					<div className="name">Basic</div>
					<div className="amount">
						<span className="dollar">$</span>
						<span className="number">22</span>
						<span className="period">hour</span>
					</div>
					<div className="feature-list">
						<ul>
							<li>Web Development</li>
							<li>Advetising</li>
							<li>Game Development</li>
							<li className="disable">Music Writing</li>
							<li className="disable">
								Photography <strong>new</strong>
							</li>
						</ul>
					</div>
					<div className="lnks">
						<button className="lnk">
							<span className="text">Buy Basic</span>
						</button>
					</div>
				</div>
			</div>

			{/* pricing item */}
			<div className="col col-d-6 col-t-6 col-m-12 border-line-v">
				<div className="pricing-item">
					<div className="icon">
						<i className="fa fa-battery-full"></i>
					</div>
					<div className="name">Pro</div>
					<div className="amount">
						<span className="dollar">$</span>
						<span className="number">48</span>
						<span className="period">hour</span>
					</div>
					<div className="feature-list">
						<ul>
							<li>Web Development</li>
							<li>Advetising</li>
							<li>Game Development</li>
							<li>Music Writing</li>
							<li>
								Photography <strong>new</strong>
							</li>
						</ul>
					</div>
					<div className="lnks">
						<button className="lnk">
							<span className="text">Buy Pro</span>
						</button>
					</div>
				</div>
			</div>

			<div className="clear"></div>
		</div>
	</div>
);

export default Pricing;
