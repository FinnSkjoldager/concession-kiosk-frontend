const express = require('express');
const router = express.Router();

/* GET request for thank you page */
  request.get('/allorders', function( err, response, body) {
          if(err){
            console.log("FRONTEND ERROR GET /ALLORDERS");
          } else {
            let orders = JSON.parse(body);
            res.render('list', {orders});
            
          };  
  )};
module.exports = router;

