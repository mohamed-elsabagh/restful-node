// Load required packages
var Log = require('../models/logModel');
var mongoose = require('mongoose');

exports.getLastLog = function(req, res) {
    try {
      var order = -1;
      if (req.query.descending) {
          order = 1;
      }
      // Use the Log model to find all log
      Log.find({}, function(err, logs) {
          if (err) {
              res.status(400).json({error: err});
              return;
          }

          res.json(logs);
      }).sort({'header.timestamp.long': -1}).limit(parseInt(1));
    } catch (e) {
        res.status(400).json({error: e});
    }
};
