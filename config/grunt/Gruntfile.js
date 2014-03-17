module.exports = function( grunt ) {

    var root = function( path ) { return '../../' + path; }
    
    var themes = function( path ) { return root('') + 'wp-content/themes/' + path; }

    grunt.initConfig( {

        pkg: grunt.file.readJSON('package.json'),

        uglify: {

          options: {
          },

          my_target: {

            files: [
                { src: [
                        themes( 'circle_1.10/js/**/*.js') 
                    ],
                  dest: root( 'wp-includes/js/index.min.js' )
                }
            ]
          }
        }
    } );

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
