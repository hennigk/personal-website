module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    bowercopy: {
  options: {
    srcPrefix: 'bower_components'
  },
  scripts: {
    options: {
      destPrefix: 'js'
    },
    files: {
      'lib/jquery.min.js': 'jquery/dist/jquery.min.js',
      'lib/modernizr.js': 'modernizr/modernizr.js',
      'lib/foundation.min.js': 'foundation/js/foundation.min.js'
    }
  }
}
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.registerTask('build', ['sass', 'bowercopy']);
  grunt.registerTask('default', ['build','watch']);
}
