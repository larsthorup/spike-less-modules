require.config({
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery',
        'text': '../../bower_components/requirejs-text/text',
        'require-css': '../../bower_components/require-css',
        'require-less': '../../bower_components/require-less',
        'base': '../../bower_components/larsthorup-base',
        'feed': '../assets'
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
require(['jquery', 'feed/js/feed'], function ($, feed) {
    feed.render($('#feed-container'));
});