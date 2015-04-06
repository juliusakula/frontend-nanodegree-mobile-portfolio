module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js']
    },
    imagemin: {
        /*    Zip files for much win! PageSpeed Scores (pizza.html)
         *  before using imagemin: 28/100 mobile
         *                         30/100 desktop
         *  after:                 
         *                         
         *     Note: using dynamic mapping of files from - https://github.com/gruntjs/grunt-contrib-imagemin#example-config - rather than static (dynamic is more scalable)
         */
       dist: {
          options: {
            optimizationLevel: 3
          },
          files: [{
             expand: true,
             cwd: 'src/images',
             src: ['**/*.{png,jpg,gif}'],
             dest: 'dist/'
          }]
       }
    },
    copy: {
        main: {
        cwd: 'src/',
        expand: true,
        src: ['**', '!images/*'],
        dest: 'dist/'
      },
    },
    clean: {
        /*    Warning! A destructive task.                       
         */
        init_dist: ['dist']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.registerTask('default', ['copy:main']);

};