import React, { Component } from "react";

class Welcome extends Component {
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



        // var usrEmail = document.getElementsByTagName("input")[0].value;
        // var friendEmail = document.getElementsByTagName("input")[1].value;
        // var day = document.getElementsByTagName("input")[2].value;
        // var location = document.getElementsByTagName("input")[3].value;

        // console.log("email: " + usrEmail + "   friendEmail: " + friendEmail + "    day: " + day + "    location: " + location);


        e.preventDefault();
        var email1 = e.target[0].value;
        var email2 = e.target[1].value;
        var date = e.target[2].value
        var location = e.target[3].value;

        console.log("email1: " + email1);
        console.log("email2: " + email2);
        console.log("date: " + date);
        console.log("location: " + location);

        //console.log(e.target[0].value)
        console.log("hey");
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
                <h2 className = "schedule">Schedule A Meeting:</h2>
                <br />
                <br />
                <div className = "formContainer">
                    <form onSubmit = {this.onSubmit}>
                        <label className = "schedForm">Your email: </label>
                        <input type="text" required /> 
                        <br/>
                        <br/>

                        <label className = "schedForm">Who would you like to meet with (email): </label>
                        <input type="text" required />
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
                        <input type="date" required />
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
                </div>
            </div>
    );
  }
}
 
export default Welcome;