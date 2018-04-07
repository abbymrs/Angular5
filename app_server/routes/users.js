const express = require('express');
const router = express.Router();

let userDb = require('../model/userDb');
let users = userDb.value();

/* GET users listing. */
router.get('/', function(req, res, next) {
  setTimeout(_=>{
    res.send(users).end();
  },2000);
});

module.exports = router;
