const router = require('express').Router();
let User = require('../models/sample.model');
var request = require('request');
var url = require('url');

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

router.route('/gyms').get((req, res) => {
    const requestUrl = url.parse(url.format({
        protocol: 'https',
        hostname: 'octo-api.asuc.org',
        pathname: '/gyms/range',
        query: {
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            radius: req.body.radius,
            unit: req.body.unit
        }
    }));
    request.get(requestUrl, {
        'auth': {
            'bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTk0NzkwOTgsInR5cGUiOiJhY2Nlc3MiLCJ1aWQiOiJ5UFZNU3RtbFRkYklHQ0hrZWF2cG93VkdMSmcyIn0.3PEwlwCVscRpIelwtoIAgXjInoRulF6JG5ldO2yHHqc'
        }
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
