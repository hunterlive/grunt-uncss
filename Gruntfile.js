module.exports = function (grunt)
{
     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uncss: {
           dist: {
               files: {
                     'css/style.css' : ['index.html']
              }
         }
       }
});
grunt.loadNpmTasks('grunt-uncss');

//tasks
grunt.registerTask('default', ['uncss']);
}