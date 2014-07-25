require.config({
    paths: {
        'text': '../../bower_components/requirejs-text/text',
        'require-css': '../../bower_components/require-css',
        'require-less': '../../bower_components/require-less',
        'base': '../assets'
    },
    map: {
        '*': {
            'css': 'require-css/css',
            'less': 'require-less/less'
        }
    },
    less: {
        logLevel: 1 // Note: only show errors
    }
});
require(['less!base/less/base']);