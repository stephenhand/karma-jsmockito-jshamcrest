/**
 * Created by stephen.hand on 04/06/2014.
 */
module.exports = function(config) {
	config.set({
		frameworks: ['mocha','jsmockito-jshamcrest'],

		files: [
			'src/adapter.js',
			'test/*.js'
		],

		browsers: ['Chrome'],

		autoWatch: true
	});
};