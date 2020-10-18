/* eslint-disable no-undef */
const { PHASE_PRODUCTION_SERVER } = process.env.NODE_ENV === 'development' ? {} : require('next/constants');

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_PRODUCTION_SERVER) {
		// Config used to run in production.
		return {
			assetPrefix: '/cv-next-project/',
			basePath: '/cv-next-project',
		};
	}
	return {};
};
