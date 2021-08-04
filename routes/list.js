const express = require('express');
const router = express.Router();
var request = require('request');
var host = BACKEND_SERVICE_HOST;
const port = 8080;
/* DEVELLUPMENT */
if (false){
  host =  'localhost';
}
/* GET request for thank you page */
const url = 'http://'+host+':'+port+'/allorders';
console.log("ENTER LIST.JS "+url);
router.get('/', function(req, res, next) {
        request.get(url, function(err, response, body) {
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