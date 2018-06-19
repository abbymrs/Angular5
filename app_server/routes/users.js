const express = require('express');
const router = express.Router();

let userDb = require('../model/userDb');
let users = userDb.value();

/* GET users listing. */
router.get('/', function(req, res, next) {
    setTimeout(_ => {
        res.send(users).end();
    }, 2000);
});

// user login
router.post('/login', (req, res) => {
    let payload = req.body;
    let resData = {
        status: 0,
        message: 'your user name or passord is not correct, pls try again'
    };

    users.forEach(user => {
        if (user.name === payload.name && user.pwd.toString() === payload.pwd) {
            resData.status = 1;
            resData.message = 'login successfully';
            userDb.find({ name: payload.name })
                .assign({ isLogin: true })
                .write();
        }
    });

    res.json(resData);
});

router.get('/banners', (req, res) => {
    let banners = [
        { name: 'slider 1' },
        { name: 'slider 2' },
        { name: 'slider 3' }
    ];
    res.send(banners).end();
});

module.exports = router;