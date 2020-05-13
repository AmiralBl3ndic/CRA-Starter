const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@': 'src/',
		'@components': 'src/components/',
		'@style': 'src/style/',
		'@pages': 'src/pages/',
		'@images': 'src/assets/images'
	})(config);

	return config;
};