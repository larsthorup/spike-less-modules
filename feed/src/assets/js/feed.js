define(function (require) {
    var $ = require('jquery');
    var template = require('text!feed/html/feed.html');
    require('less!feed/less/feed');

    function render(context) {
        context.html(template);
    }

    var feed = {
        render: render
    };

    return feed;
});