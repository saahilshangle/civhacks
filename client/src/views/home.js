import React, { Component } from "react";
import swal from 'sweetalert';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email1: 'cbheinbaugh@gmail.com',
            email2: 'briananderson346@gmail.com',
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

        this.setState({
            output: `${e.target[0].value} can meet ${e.target[1].value} on ${e.target[2].value} at The Bancroft Library (37.8723,-122.2589)`
        });

        // Modal Dialogs
        swal("Possible meeting found!", `You can meet with ${e.target[1].value} on ${e.target[2].value} at The Bancroft Library @3pm`,{
            buttons: {
              cancel: "Cancel",
              redo: {
                text: "Eh, try another possibility",
                value: "redo",
              },
              accept: true,
            },
          })
          .then((value) => {
            switch (value) {
           
              case "accept":
                swal("Meeting has been added to your calendar!", "", "success");
                break;
           
              case "redo":
                swal("Sorry!", "No other meeting times work for all parties involved.", "error");
                break;
           
              default:
                swal("Meeting has been scrapped.");
            }
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
                        <label className = "schedForm">Your Email: </label>
                        <input type="text"
                                required 
                                value={this.state.email1}
                                onChange={this.onChangeEmail1}
                        /> 
                        <br/>
                        <br/>

                        <label className = "schedForm">Peer's Email: </label>
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
                    <br /><br />
                </div>

                {/* <div className = "output">
                    {this.state.output}
                </div> */}
            </div>
    );
  }
}
 
export default Welcome;