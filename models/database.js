var mongoose = require('mongoose');
var constants = require('../utils/constants.js');

// var localDb = null;
var kaaDb = null;
// Connect to MongoDB without authentication
// var localDbConnectionString = 'mongodb://' + constants.databaseHost + ':' +
//     constants.databasePort + '/' + constants.appDatabaseName;
var kaaDbConnectionString = 'mongodb://' + constants.databaseHost + ':' +
    constants.databasePort + '/' + constants.kaaDatabaseName;

// localDb = mongoose.createConnection(localDbConnectionString);
kaaDb = mongoose.createConnection(kaaDbConnectionString);

mongoose.Promise = global.Promise;

/*
var uri = mongodb://localhost:27017/ + constants.appDatabaseName;
var options = {
                db: { native_parser: true },
                server: { poolSize: 5 },
                replset: { rs_name: 'myReplicaSetName' },
                user: 'myUserName',
                pass: 'myPassword'
}
mongoose.connect(uri, options);

*/

// exports.localDb = localDb;
exports.kaaDb = kaaDb;
