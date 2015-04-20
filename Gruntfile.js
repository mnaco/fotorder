module.exports = function(grunt) {
    grunt.initConfig({
       
        pkg: grunt.file.readJSON('package.json'),
       
        sass: {
            dist: {
                options: {
                    // lineNumbers: true,
                    sourcemap: 'none',
                    noCache: true,
                    style: 'expanded'
                },
                files: [{
                    // 'www/css/main.css' : 'scss/main.scss'
                    expand: true,
                    cwd: 'scss/',
                    src: ['*.scss'],
                    dest: 'www/css/',
                    ext: '.css'
                }]
            }
        },

        autoprefixer:{
            options: {
              browsers: ['last 2 versions']
            },
            dist:{
                files:{
                  'www/css/main.css':'www/css/main.css'
                }
            }
        },

        watch: {
          css: {
            files: 'scss/**/*.scss',
            tasks: ['sass', 'autoprefixer']
          }
        }

    });
   
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('brewCSS', ['sass', 'autoprefixer']);
}
