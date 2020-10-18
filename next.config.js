/* eslint-disable no-undef */

module.exports = () => {
	if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'dev') {
		// Config used to run in production.
		return {
			assetPrefix: '/cv-next-project/',
			basePath: '/cv-next-project',
		};
	}
	return {};
};
