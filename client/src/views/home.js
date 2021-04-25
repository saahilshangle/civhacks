import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email1: 'steve@example.com',
            email2: 'mary@example.com',
            dayToMeet: '2021-04-25',
            typeOfLocation: '',
            output: '',
            coordinates: ''
        }

        this.onChangeEmail1 = this.onChangeEmail1.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onChangeEmail1(e) {
        this.setState({
            email1: e.target.value
        });
    }

    onSubmit(e) {
        // e.preventDefault();
        // const result = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username: this.state.username })
        // };
        
        // let apiURL = 'http://localhost:5000/sample/add'
        // fetch(apiURL, result)
        //     .then(res => res.text())
        //     .then(res => console.log(res))

        e.preventDefault();
        var email1 = e.target[0].value;
        var email2 = e.target[1].value;
        var date = e.target[2].value

        let apiURL = 'http://localhost:5000/sample/getInfo'
        fetch(apiURL)
            .then(res => res.text())
            .then(res => this.setState({ coordinates: res }))

        this.setState({
            output: `${email1} will meet ${email2} on ${date} at 37.878968,-122.264619`
        });
    }

    onSearch(e) {
        e.preventDefault();
        let apiURL = 'http://localhost:5000/sample/'
        fetch(apiURL)
            .then(res => res.text())
            .then(res => this.setState({ usernames: res }))
    }

    onSubmitTwo(e) {
        e.preventDefault();
        const serverUrl = `http://localhost:5000/sample/gyms/latitude=${this.state.latitude}&longitude=${this.state.longitude}&radius=${this.state.radius}&unit=${this.state.unit}`;
        fetch(serverUrl)
            .then(res => res.text())
            .then(res => this.setState({ gyms: res }))
    }

    render() {
        return (
            <div>
                <h2 className = "schedule">Schedule A Meeting:</h2>
                <br />
                <br />
                <div className = "formContainer">
                    <form onSubmit = {this.onSubmit}>
                        <label className = "schedForm">Your email: </label>
                        <input type="text"
                                required 
                                value={this.state.email1}
                                onChange={this.onChangeEmail1}
                        /> 
                        <br/>
                        <br/>

                        <label className = "schedForm">Who would you like to meet with (email): </label>
                        <input type="text" required value={this.state.email2}/>
                        <br/>
                        <br/>

                        {/* <label className = "schedForm">Input your calendar: </label>
                        <input type="text" required />
                        <br/>
                        <br/>

                        <label className = "schedForm">Upload their calandar: </label>
                        <input type="text" required />
                        <br/>
                        <br/> */}

                        <label className = "schedForm">Day to meet: </label>
                        <input type="date" required value={this.state.dayToMeet}/>
                        <br/>
                        <br/>

                        <label className = "schedForm">Choose a type of location: </label>
                        <select id="locations">
                            <option value="library">Library</option>
                            <option value="diningHall">Dining Hall</option>
                            <option value="gym">Gym</option>
                        </select>
                        <br/>
                        <br/>
                        <br />

                        <input className="genBtn" type="submit" value="Generate Possible Meetings"  />
                    </form>
                    <p>{this.state.output}</p>
                </div>
            </div>
    );
  }
}
 
export default Welcome;