const express = require('express');
const router = express.Router();

/* GET request for thank you page */
router.get('/', function(req, res, next) {
  console.log('req: ' + req);
  res.render('thankyou', { ticketNumber: 200 });
});
module.exports = router;

