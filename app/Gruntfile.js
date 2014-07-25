/*global module*/
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['serve']);

    // postinstall
    grunt.loadNpmTasks('grunt-contrib-copy');
    gruntConfig.copy = {
        postinstall: { files: [
            { cwd: '../base/src/assets', src: ['**/*'], dest: 'bower_components/larsthorup-base', expand: true },
            { cwd: '../feed/src/assets', src: ['**/*'], dest: 'bower_components/larsthorup-feed', expand: true }
        ] }
    };
    grunt.registerTask('postinstall', ['copy:postinstall']);

    // connect
    grunt.loadNpmTasks('grunt-contrib-connect');
    gruntConfig.connect = {
        root: {
            options: {
                port: 8765,
                base: '.'
            }
        }
    };
    grunt.registerTask('serve', ['connect:root:keepalive']);

    // grunt
    grunt.initConfig(gruntConfig);
};