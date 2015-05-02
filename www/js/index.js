"use strict";

var phonegap = {};

phonegap.app = {
	
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        StatusBar.hide();
        FastClick.attach(document.body);

        phonegap.app.myFunction();
    },

    myFunction: function() {
        var jqxhr = $.get("https://itunes.apple.com/es/rss/topaudiobooks/limit=10/json", function(json) {
            for (var i = 0; i < json.feed.entry.length; i++) {
                console.log(json);
                var html = '<li>' + json.feed.entry[i].title.label + '</li>'
                // JSON Path is: feed - entry[i] - title - label
                $("#table").append(html).trigger('create').listview('refresh');
            }
        }, "json").fail(function(error) {
            alert(error.code);
        });
    }

};
