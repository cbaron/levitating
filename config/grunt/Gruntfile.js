module.exports = function( grunt ) {

    var root = function( path ) { return '../../' + path; }
    
    var themes = function( path ) { return root('') + 'wp-content/themes/' + path; }

    grunt.initConfig( {

        pkg: grunt.file.readJSON('package.json'),

        http: {

            webfont: {
                options: {
                    url: 'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
                },
                dest: root( 'wp-includes/js/remote/webfont.js' )
            },

            ieShimOne: {
                options: {
                    url: 'http://html5shim.googlecode.com/svn/trunk/html5.js'
                },
                dest: root( 'wp-includes/js/remote/html5.js' )
            },

            ieShimTwo: {
                options: {
                    url: 'http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js'
                },
                dest: root( 'wp-includes/js/remote/css3-mediaqueries.js' )
            }
        },

        uglify: {

          options: {
            mangle: true,
            compress: true,
            report: 'gzip'
          },

          my_target: {
            files: [
                { src: [
                        root( 'wp-includes/js/jquery/jquery.js' ),
                        root( 'wp-includes/js/jquery/jquery-migrate.min.js' ),
                        root( 'wp-includes/js/remote/webfont.js' ),
                        themes( 'circle_1.10/js/google-fonts.js' ),
                        themes( 'circle_1.10/js/bootstrap.min.js' ),
                        themes( 'circle_1.10/js/jflickrfeed.min.js' ),
                        themes( 'circle_1.10/js/jQuery.BlackAndWhite.js' ),
                        themes( 'circle_1.10/js/jquery.carouFredSel-6.0.4-packed.js' ),
                        themes( 'circle_1.10/js/jquery.easing.1.3.js' ),
                        themes( 'circle_1.10/js/jquery.eislideshow.js' ),
                        themes( 'circle_1.10/js/jquery.flexslider-min.js' ),
                        themes( 'circle_1.10/js/jquery.form.js' ),
                        themes( 'circle_1.10/js/jquery.hoverdir.js' ),
                        themes( 'circle_1.10/js/jquery.isotope.min.js' ),
                        themes( 'circle_1.10/js/jquery.prettyPhoto.js' ),
                        themes( 'circle_1.10/js/jquery.sticky.js' ),
                        themes( 'circle_1.10/js/jquery.tweet.js' ),
                        themes( 'circle_1.10/js/jquery.validate.min.js' ),
                        themes( 'circle_1.10/js/sequence.jquery-min.js' ),
                        themes( 'circle_1.10/js/less.js' ),
                        themes( 'circle_1.10/js/modernizr-transitions.js' ),
                        themes( 'circle_1.10/js/retina.js' ),
                        themes( 'circle_1.10/js/superfish.js' ),
                        themes( 'circle_1.10/js/jquery.easy-pie-chart.js' ),
                        themes( 'circle_1.10/js/custom.js' )
                    ],
                  dest: root( 'wp-includes/js/index.min.js' )
                }
            ]
          }
        },

        cssmin: {
            options: {
                report: 'gzip'
            },

            combine: {
                files: [ {

                    '../../wp-content/themes/circle_1.10/index.min.css':

                        [
                            themes( 'circle_1.10/css/reset.css' ),
                            /* themes( 'circle_1.10/css/retina.less' ), */
                            themes( 'circle_1.10/css/bootstrap.css' ),
                            themes( 'circle_1.10/css/circle-hover.css' ),
                            themes( 'circle_1.10/css/flexslider.css' ),
                            themes( 'circle_1.10/css/icoMoon.css' ),
                            themes( 'circle_1.10/css/prettyPhoto.css' ),
                            themes( 'circle_1.10/css/sequencejs-theme.modern-slide-in.css' ),
                            themes( 'circle_1.10/css/superfish.css' ),
                            themes( 'circle_1.10/style.css' ),
                            themes( 'circle_1.10/css/bootstrap-responsive.css' ),
                            themes( 'circle_1.10/css/responsive.css' ),
                            themes( 'circle_1.10/css/jquery.easy-pie-chart.css' )
                        ]
                } ]
            }
        }
    } );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-http');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask( 'default', [
      'http:webfont',
      'http:ieShimOne',
      'http:ieShimTwo',
      'cssmin:combine',
      'uglify'
  ] );

};
