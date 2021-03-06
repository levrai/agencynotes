/**
 * @name AgentsCollection
 * @description collection of model type: Agent
 * @param {function} require
 */define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        Storage = require('backbonestorage'),
        Agent = require('models/agent'),
        AgentsCollection;

    AgentsCollection = Backbone.Collection.extend({
        model: Agent,

        localStorage: new Backbone.LocalStorage('agents')
    });

    return AgentsCollection;
});
