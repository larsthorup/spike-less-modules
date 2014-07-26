/*global module*/
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['bundle', 'serve']);

    // postinstall
    grunt.loadNpmTasks('grunt-contrib-copy');
    gruntConfig.copy = {
        postinstall: { files: [
            { cwd: 'bower_components/requirejs', src: ['require.js'], dest: 'src/lib', expand: true },
            // Note: the following is faking a bower install of the local modules
            { cwd: '../base/src/assets', src: ['**/*'], dest: 'bower_components/larsthorup-base', expand: true },
            { cwd: '../feed/src/assets', src: ['**/*'], dest: 'bower_components/larsthorup-feed', expand: true }
        ] },
        dist: { files: [
            { cwd: 'src', src: ['index.html'], dest: 'output/dist', expand: true }
        ]}
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

    // bundle
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    gruntConfig.requirejs = {

        // Note: shared configuration for all bundled modules
        options: {
            baseUrl: 'src/assets',
            mainConfigFile: 'src/assets/main.js',
            optimize: 'none',

            // Note: "css" module not used in production as all css is bundled
            exclude: ['require-css/normalize'],
            pragmasOnSave: {
                excludeRequireCss: true
            }
        },

        // Note: bundle the "main" module and every module referenced recursively by it
        main: {
            options: {
                name: 'main',
                out: 'output/dist/lib/require.js',

                // Note: explicitly include necessary files that are not explicitly referenced
                include: ['../lib/require'],

                // Note: "text" and "less" modules not used in production as all text and css is bundled
                stubModules: [
                    'text',
                    'require-less/less'
                ]
            }
        }
    };
    grunt.registerTask('bundle', ['copy:dist', 'requirejs']);

    // connect
    grunt.loadNpmTasks('grunt-contrib-connect');
    gruntConfig.connect = {
        root: {
            options: {
                port: 8765,
                base: 'output/dist'
            }
        }
    };
    grunt.registerTask('serve', ['connect:root:keepalive']);

    // grunt
    grunt.initConfig(gruntConfig);
};