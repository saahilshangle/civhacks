import React from 'react';
import './../App.css';

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
            gyms: []
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeLatitude = this.onChangeLatitude.bind(this);
        this.onChangeLongitude = this.onChangeLongitude.bind(this);
        this.onChangeRadius = this.onChangeRadius.bind(this);
        this.onChangeUnit = this.onChangeUnit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitTwo = this.onSubmitTwo.bind(this);
        this.onSearch = this.onSearch.bind(this);
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
            </div>
        );
    }
}
