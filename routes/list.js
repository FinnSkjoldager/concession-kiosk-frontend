const express = require('express');
const router = express.Router();

/* GET request for thank you page */
router.get('/list', function(req, res, next) {
  console.log('req: ' + req);
    request.get('/allorders', function( err, response, body) {
      if(err){
        console.log("FRONTEND ERROR GET /ALLORDERS");
      } else {
        let orders = JSON.parse(body);
        res.render('list', {orders});
        
      }  
  }
  res.render('list', { ticketNumber: 200 });
});
module.exports = router;

