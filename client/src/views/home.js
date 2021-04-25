import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email1: 'steve@example.com',
            email2: 'mary@example.com',
            dayToMeet: '2021-04-25',
            typeOfLocation: '',
            output: ''
        }

        this.onChangeEmail1 = this.onChangeEmail1.bind(this);
        this.onChangeEmail2 = this.onChangeEmail2.bind(this);
        this.onChangeDayToMeet = this.onChangeDayToMeet.bind(this);
        this.onChangeTypeOfLocation = this.onChangeTypeOfLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onChangeEmail1(e) {
        this.setState({
            email1: e.target.value
        });
    }

    onChangeEmail2(e) {
        this.setState({
            email2: e.target.value
        });
    }

    onChangeDayToMeet(e) {
        this.setState({
            dayToMeet: e.target.value
        });
    }

    onChangeTypeOfLocation(e) {
        this.setState({
            typeOfLocation: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        // const options = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         person1: this.state.email1,
        //         person2: this.state.email2,
        //         locType: this.state.typeOfLocation,
        //         meetingDate: this.state.dayToMeet
        //     })
        // };
        
        // let apiURL = 'http://localhost:5000/sample/calculate'
        // fetch(apiURL, options
        //     .then(res => res.text())
        //     .then(res => console.log(res))

        this.setState({
            output: `${e.target[0].value} will meet ${e.target[1].value} on ${e.target[2].value} at 37.878968,-122.264619`
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
                        <input type="text" 
                                required 
                                value={this.state.email2}
                                onChange={this.onChangeEmail2}
                        />
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
                        <input type="date" required 
                                value={this.state.dayToMeet}
                                onChange={this.onChangeDayToMeet}
                        />
                        <br/>
                        <br/>

                        <label className = "schedForm">Choose a type of location: </label>
                        <select id="locations">
                            <option value="library" onChange={this.onChangeTypeOfLocation}>Library</option>
                            <option value="diningHall" onChange={this.onChangeTypeOfLocation}>Dining Hall</option>
                            <option value="gym" onChange={this.onChangeTypeOfLocation}>Gym</option>
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