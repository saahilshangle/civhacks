import React from 'react';
import './../App.css';
const http = require('http');

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernames: [],
            latitude: 37.878968,
            longitude: -122.264619,
            radius: 5,
            unit: 'mi',
            gyms: [],
            something: 0,
            poss: []
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeLatitude = this.onChangeLatitude.bind(this);
        this.onChangeLongitude = this.onChangeLongitude.bind(this);
        this.onChangeRadius = this.onChangeRadius.bind(this);
        this.onChangeSomething = this.onChangeSomething(this);
        this.onChangeUnit = this.onChangeUnit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitTwo = this.onSubmitTwo.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onSubmitThree = this.onSubmitThree(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeLatitude(e) {
        this.setState({
            latitude: Number(e.target.value)
        });
    }

    onChangeLongitude(e) {
        this.setState({
            longitude: Number(e.target.value)
        });
    }

    onChangeRadius(e) {
        this.setState({
            radius: Number(e.target.value)
        });
    }

    onChangeUnit(e) {
        this.setState({
            unit: e.target.value
        });
    }

    onChangeSomething(e) {
        this.setState({
            something: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const result = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username })
        };
        
        let apiURL = 'http://localhost:5000/sample/add'
        fetch(apiURL, result)
            .then(res => res.text())
            .then(res => console.log(res))
    }

    onSubmitTwo(e) {
        e.preventDefault();
        const serverUrl = `http://localhost:5000/sample/gyms/latitude=${this.state.latitude}&longitude=${this.state.longitude}&radius=${this.state.radius}&unit=${this.state.unit}`;
        fetch(serverUrl)
            .then(res => res.text())
            .then(res => this.setState({ gyms: res }))
    }

    RouteMatrix(pair1, pair2, pair3) {
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
        
        var global;
        const req = http.request(options, function (res) {
        const chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            global = (body.toString());
            console.log(body.toString())
        });
        });
    
        req.write(JSON.stringify({locations: [pair1, pair2, pair3]}));
        req.end();
        console.log(global)
        return "hey"
    }

    onSubmitThree(e) {
        // const options = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ 
        //         person1: "saahil",
        //         person2: "cole",
        //         locType: "gyms",
        //         meetingDate: "4-25-2021"
        //     })
        // };
        // const serverUrl = `http://localhost:5000/sample/calculate`;
        // fetch(serverUrl, options)
        //     .then(res => res.text())
        //     .then(res => this.setState({ poss: res }))

        // let meetingPt = "37.878968,-122.264619" // UC Berkeley
        // let personA = "33.6405,-117.8443" // UC Irvine
        // let personB = "37.4275,-122.1697" // Stanford
        // this.setState({ poss: this.RouteMatrix(meetingPt, personA, personB) })
        
        // e.preventDefault();
        // this.setState({ poss: "hey" })

        e.preventDefault();
        const serverUrl = `http://localhost:5000/sample/gyms/latitude=${this.state.latitude}&longitude=${this.state.longitude}&radius=${this.state.radius}&unit=${this.state.unit}`;
        fetch(serverUrl)
            .then(res => res.text())
            .then(res => this.setState({ poss: res }))
    }


    onSearch(e) {
        e.preventDefault();
        let apiURL = 'http://localhost:5000/sample/'
        fetch(apiURL)
            .then(res => res.text())
            .then(res => this.setState({ usernames: res }))
    }

    render() {
        return (
            <div>
                <h3>Add User to DB</h3>
                <form onSubmit = {this.onSubmit}>
                    <label>Username</label>
                    <input type="text"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                    />
                    <input type="submit" value="Create User"  />
                </form>
                
                <h3>Existing Users in DB</h3>
                <button onClick={this.onSearch}>Search</button>
                <p>{this.state.usernames}</p>
                
                <h3>Find Nearby Gyms</h3>
                <form onSubmit = {this.onSubmitTwo}>
                    <label>Latitude</label>
                    <input type="text"
                            required
                            value={this.state.latitude}
                            onChange={this.onChangeLatitude}
                    />
                    <label>Longitude</label>
                    <input type="text"
                            required
                            value={this.state.longitude}
                            onChange={this.onChangeLongitude}
                    />
                    <label>Radius</label>
                    <input type="text"
                            required
                            value={this.state.radius}
                            onChange={this.onChangeRadius}
                    />
                    <label>Unit</label>
                    <input type="text"
                            required
                            value={this.state.unit}
                            onChange={this.onChangeUnit}
                    />
                    <input type="submit" value="Submit Search"  />
                </form>
                <p>{this.state.gyms}</p>
                <h3>Possible Meetup Locations</h3>
                <form onSubmit = {this.onSubmitThree}>
                    <label>Isk</label>
                    <input type="text"
                            required
                            value={this.state.something}
                            onChange={this.onChangeSomething}
                    />
                    <input type="submit" value="Search Possible" />
                </form>
                <p>{this.state.poss}</p>
            </div>
        );
    }
}
