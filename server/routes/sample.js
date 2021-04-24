const router = require('express').Router();
let User = require('../models/sample.model');
var request = require('request');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/gyms/:id').get((req, res) => {
    const endURL = `https://octo-api.asuc.org/gyms/range?${req.params.id}`;
    request.get(endURL, {
        'auth': {
            'bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTk0NzkwOTgsInR5cGUiOiJhY2Nlc3MiLCJ1aWQiOiJ5UFZNU3RtbFRkYklHQ0hrZWF2cG93VkdMSmcyIn0.3PEwlwCVscRpIelwtoIAgXjInoRulF6JG5ldO2yHHqc'
        }
    }).pipe(res)
});

router.route('/map/:pair1/:pair2/:pair3').get((req, res) => {
    request.post({
        headers: { "content-type": "application/json" },
        url: 'http://www.mapquestapi.com/directions/v2/routematrix?key=KawLzVJldGNrlc2dbxE6tOLUUUjRKJA6',
        body: JSON.stringify({
            "locations": [
                req.params.pair1,
                req.params.pair2,
                req.params.pair3
            ]})
    }, function(error, response, body) {
        console.long(response);
    }).pipe(res)
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(users => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findbyId(req.params.id)
        .then(users => {
            users.username = req.body.username;
            users.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
