const port = 5002;
const databaseHost = 'localhost';
const databasePort = '27017';
const kaaDatabaseName = 'demo';
const kaaAppId = '46446319481347303729';
const kaaCollectionLogName = 'logs_' + kaaAppId;

module.exports = {
    port: port,
    databaseHost : databaseHost,
    databasePort : databasePort,
    kaaDatabaseName: kaaDatabaseName,
    kaaCollectionLogName: kaaCollectionLogName
};
