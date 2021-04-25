const router = require('express').Router();
let User = require('../models/sample.model');
const http = require('http');
const request = require('request');

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

function RouteMatrix(pair1, pair2, pair3) {
    let p = new Promise(function(resolve, reject) {
    request.post({
        headers: { "content-type": "application/json" },
        url: 'http://www.mapquestapi.com/directions/v2/routematrix?key=KawLzVJldGNrlc2dbxE6tOLUUUjRKJA6',
        body: JSON.stringify({
            "locations": [
                pair1,
                pair2,
                pair3
            ]})
    }, function(error, response, body) {
        //console.log(body);
        resolve(body);
    })
    })
    return p
}

router.route('/calculate').post( async (req, res) => {
    const person1 = req.body.person1;
    const person2 = req.body.person2;
    const locType = req.body.locType;
    const meetingDate = req.body.meetingDate;
    var possSpots;
    var meetingCoord;
    var meetingTime;
    
    let meetingPt = "37.86774912247788, -122.25777861935839" // Feng Cha
    let personA = "37.8691,-122.2549" // Caffe Strada
    let personB = "37.8653,-122.2583" // Romeos Coffee
    
    let sumDistance = await RouteMatrix(meetingPt, personA, personB)
    let sumTemp = JSON.parse(sumDistance)['distance'];
    let sum = sumTemp[1] + sumTemp[2]
    console.log(`Minimized Total Travel: ${sum} miles!`)

    res.send(meetingPt);
});

module.exports = router;
