'use strict';

module.exports = function(grunt){
	
    // CONFIGURATION HERE: 
	grunt.initConfig({
      copy: {
        main: {
          files: [
    
             // includes files within path and its sub-directories
             {expand: true, src: ['path/**'], dest: 'dest/'}
           ]
  }
}
	})

	// LOAD PLUGINS HERE:
	grunt.loadNpmTasks('grunt-contrib-copy');

	// DEFINE TASKS HERE: 
	grunt.registerTasks('build', 'grunt-contrib-copy'); 
}