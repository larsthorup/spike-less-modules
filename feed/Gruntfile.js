/*global module*/
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // postinstall
    grunt.loadNpmTasks('grunt-contrib-copy');
    gruntConfig.copy = {
        postinstall: { files: [
            { cwd: '../base/src/assets', src: ['**/*'], dest: 'bower_components/larsthorup-base', expand: true }
        ] }
    };
    grunt.registerTask('postinstall', ['copy:postinstall']);

    // grunt
    grunt.initConfig(gruntConfig);
};