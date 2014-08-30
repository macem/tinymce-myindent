/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'plugin.js'
      ]
    },

    minified : {
      files: {
        src: 'plugin.js',
        dest: './'
      },
      options : {
        ext: '.min.js'
      }
    }
  });

  // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-minified');

  // Default task.
  grunt.registerTask('build', ['jshint','minified']);
  // grunt.registerTask('release', ['set_option:outpath:build/release/', 'newer:copy:main', 'newer:processhtml:main', 'minify', 'set_option:archive:RELEASE', 'compress:main']);
};