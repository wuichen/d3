module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.initConfig({
	    bowerInstall: {
	      target: {
	        src: 'visual.html' // point to your HTML file.
	      }
	    }
	});

};