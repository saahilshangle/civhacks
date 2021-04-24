import React from 'react';
import './../App.css';
import NavBar from './NavBar'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

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
                <NavBar/>

    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />


                <h3 className = "schedule">Schedule A Meeting</h3>
                <form onSubmit = {this.onSubmit}>
                    <label>Who would you like to meet with?</label>
                    <input type="text"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                    />
                    <input type="submit" value="Generate Possible Meetings"  />
                </form>

                <Container maxWidth="sm">
                    <Box my={4}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Schedule A Meeting
                        </Typography>
                    </Box>
                </Container>


                <h3>Logout</h3>
                <a href = "login">
                <button id = "loginButton">Logout</button>
                </a>
            </div>
        );
    }
}
