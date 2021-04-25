const router = require('express').Router();
let User = require('../models/sample.model');

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

function RouteMatrix(pair1, pair2, pair3) {
    const options = {
        "method": "POST",
        "hostname": "www.mapquestapi.com",
        "port": null,
        "path": "/directions/v2/routematrix?key=KawLzVJldGNrlc2dbxE6tOLUUUjRKJA6",
        "headers": {
            "cookie": "JSESSIONID=6C68533A150FA80FEAD175EEB9EE9884",
            "Content-Type": "application/json",
        },
        "body": {
            "allToAll": false,
            "manyToOne": true
        }
    };
    
    const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        //console.log(body.toString());
    });
    });

    req.write(JSON.stringify({locations: [pair1, pair2, pair3]}));
    let result = req.write(JSON.stringify({locations: [pair1, pair2, pair3]}));
    req.end();
    return result
}

router.route('/calculate').post( (req, res) => {
    const person1 = req.body.person1;
    const person2 = req.body.person2;
    const locType = req.body.locType;
    const meetingDate = req.body.meetingDate;
    var possSpots;
    var meetingCoord;
    var meetingTime;
    
    let meetingPt = "37.878968,-122.264619" // UC Berkeley
    let personA = "33.6405,-117.8443" // UC Irvine
    let personB = "37.4275,-122.1697" // Stanford
    let sumDistance = RouteMatrix(meetingPt, personA, personB)
    console.log(sumDistance);

    res.send({
        person1: person1,
        person2: person2,
        locType: locType//,
        // meetingCoord: meetingCoord,
        // meetingTime: meetingTime
    });
});

module.exports = router;
