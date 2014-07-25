require.config({
    paths: {
        // ToDo: inherit from dependencies
        'jquery': '../../bower_components/jquery/dist/jquery',
        'text': '../../bower_components/requirejs-text/text',
        'require-css': '../../bower_components/require-css',
        'require-less': '../../bower_components/require-less',
        'base': '../../bower_components/larsthorup-base',
        'feed': '../../bower_components/larsthorup-feed',

        'app': '.'
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
require(['jquery', 'feed/js/feed', 'less!app/less/app'], function ($, feed) {
    feed.render($('#feed-container'));
});