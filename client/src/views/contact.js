import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2 className= "schedule">Any questions?</h2>
        <br />
        <div className = "formContainer">
            <p className = "schedForm" >Email the devs:</p>
            <ul className = "schedForm">
                <li>briananderson346@gmail.com</li>
                <li>cbheinbaugh@gmail.com</li>
                <li>saahilshangle@gmail.com</li>
                <li>spencerrcobb@gmail.com</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Contact;