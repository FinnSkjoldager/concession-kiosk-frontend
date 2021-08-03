const express = require('express');
const router = express.Router();
var request = require('request');
/* GET request for thank you page */
console.log("ENTER LIST.JS ");
router.get('/', function(req, res, next) {
      //http://localhost:8080
        request.get('http://localhost:8080/allorders', function(err, response, body) {
                if(err){
                  console.log("FRONTEND ERROR GET /ALLORDERS");
                } else {
                  let orders = JSON.parse(body);
                  console.log("OK GET /ALLORDERS");
                  res.render('list', {orders});
                };  
        });
   });
  /*
  router.get('/', function(req, res, next) {
    res.render('list');
  });
  */
module.exports = router;