// Load required packages
var mongoose = require('mongoose');
var db = require('./database');
var constants = require('../utils/constants.js');

/*
    All optional fields in the each document, should be defined as JSON object
    because they are sent as object from kaa, unlike non optional which are sent as
    primitive types
*/

// Define our member schema
var endpointKeyHash = new mongoose.Schema({
    string: {
        type: String
    }
});

var applicationToken = new mongoose.Schema({
    string: {
        type: String
    }
});

var headerVersion = new mongoose.Schema({
    int: {
        type: Number
    }
});

var timestamp = new mongoose.Schema({
    long: {
        type: Number
    }
});

var logSchemaVersion = new mongoose.Schema({
    int: {
        type: Number
    }
});

// Define our log schema
var LogSchema = new mongoose.Schema({
    header: {
        endpointKeyHash: endpointKeyHash,
        applicationToken: applicationToken,
        headerVersion: headerVersion,
        timestamp: timestamp,
        logSchemaVersion: logSchemaVersion
    },
    event: {
        deviceId: {
            type: String
        },
        temperature: {
            type: Number
        },
        lux: {
            type: Number
        }
    }
}, {
    collection: constants.kaaCollectionLogName
}); // Force name of collection to be logs_kaaAppId

// Export the Mongoose model
module.exports = db.kaaDb.model('Logs', LogSchema);
