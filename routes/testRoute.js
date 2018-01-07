var express = require('express');
var logController = require('../controllers/logController');

// Create our Express router
var router = express.Router();

/********************************/
/*       Test Routes            */
/********************************/
// Create endpoint handlers for /api/test
// router.route('/')
//     .get(function(req, res) {
//         res.json({
//             message: 'Testing route is working'
//         });
//     });

router.route('/')
    .get(logController.getLastLog);

module.exports = router;
