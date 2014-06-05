/**
 * Created by stephen.hand on 04/06/2014.
 */
// Generated on <%= (new Date).toISOString().split("T")[0] %> using
// <%= pkg.name %> <%= pkg.version %>
"use strict";

// # Globbing
// for performance reasons we"re only matching one level down:
// "test/spec/{,*/}*.js"
// If you want to recursively match all subfolders, use:
// "test/spec/**/*.js"
Error.stackTraceLimit = 200;
module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-karma");


	// Define the configuration for all the tasks
	grunt.initConfig({
		karma: {
			adapter: {
				configFile: "karma.conf.js",
				autoWatch: false,
				singleRun: true,
				reporters: ["dots"]
			}
		}
	});


	grunt.registerTask("test", ["karma"]);

};