module.exports = function(grunt) {

  // Initialize
    require('load-grunt-tasks')(grunt);
    //require('grunt-autoprefixer')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Sass Globbing plugin
    sass_globbing: {
      my_target: {
        files: {
          'styles.sass': 'sass/**/*.sass'
        },
        options: {
          useSingleQuotes: true
        }
      }
    },
    // Sass plugin
    sass: {
      options: { sourceMap: true },
      dist: { files: {'styles.css' : 'styles.sass'} }
    },
    // Autoprefixer plugin
    autoprefixer: {
      options: {
          browsers: ['last 25 versions', 'ie 8', 'ie 9', '> 1%']
      },
      main: {
          expand: true,
          flatten: true,
          files: {
            'styles.css' : 'styles.css'
          }
      }
    },
    // Watch plugin
    watch: {
      files: ['**/*.sass'],
      tasks: ['sass_globbing', 'sass', 'autoprefixer'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks.
  grunt.registerTask('default', ['watch']);

};