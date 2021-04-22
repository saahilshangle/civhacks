import React from 'react';
import './../App.css';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernames: []
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
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
            </div>
        );
    }
}
