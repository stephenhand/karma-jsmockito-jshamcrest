/**
 * Created by stephen.hand on 04/06/2014.
 */
var path = require('path');

var pattern = function(file) {
	return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
	files.unshift(pattern(path.join(__dirname, 'adapter.js')));
	files.unshift(pattern(path.resolve(require.resolve('jshamcrest'))));
	files.unshift(pattern(path.resolve(require.resolve('jsmockito'))));
	files.unshift(pattern(path.join(__dirname, 'fix_jsmockito_npm.js')));

};

framework.$inject = ['config.files'];
module.exports = {'framework:jsmockito-jshamcrest': ['factory', framework]};
