//import React, { useState } from "react";

const http = require("http");
const https = require("https");
const request = require('request');

//function main(email1, email2, date, location)
// function main()
// {
    // get email1 schedule with google calendar
    // get email2 schedule with google calendar

    // get list of requested locations
    var locations;
    const options = {
    "method": "GET",
    "hostname": "octo-api.asuc.org",
    "port": null,
    "path": "/gyms",
    "headers": {
        "Content-Length": "0",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTk0NzkwOTgsInR5cGUiOiJhY2Nlc3MiLCJ1aWQiOiJ5UFZNU3RtbFRkYklHQ0hrZWF2cG93VkdMSmcyIn0.3PEwlwCVscRpIelwtoIAgXjInoRulF6JG5ldO2yHHqc"
    }
    };
    const req = https.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        
        locations = JSON.parse(body.toString()); // list of locations
        
        // console.log(locations);
        // for (var i = 0; i < locations.length; i++)
        // {
        //     console.log(locations[i]['latitude']);
        // }
    });
    });
    req.end();

    console.log(locations);
//}
    

    // find overlapping free time create list of locations and times
    // using mapquest to find optimal location

    // return optimal location and time to webpage
    // create google calendar entry in both emails

export {main};