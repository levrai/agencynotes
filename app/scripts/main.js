'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        backbonestorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        text: '../bower_components/requirejs-text/text'
    },

    shim: {
        underscore: {
            exports: '_',
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        backbonestorage: {
            deps:['backbone'],
            exports: 'Backbone'
        }
    }
});

require(['routers/app-routes'], function(AppRoutes) {
    console.log('main: ', AppRoutes);
    var appRoutes = new AppRoutes;
    Backbone.history.start();
});
