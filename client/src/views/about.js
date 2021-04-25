import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2 className= "schedule">What is 'Meet Me Here'?</h2>
        <br />
        <div className = "infoContainer">
          <p className = "schedForm">This webapp was made to connect UC Berkeley people with ease.  Aimed to remove the hassle of 
          comparing schedules, going back and forth with plans, and inevitably canceling.</p>
          <ul className = "schedForm">
            <li>Using (Berkeley's own) OCTO, Google Calendar, and Mapquest APIs to compute ideal meeting times/locations between parties.</li>
            <li>Looking forward to a post-pandemic world, we want to encourage face-to-face interactions--enough Zoom meetings have been held.</li>
            <li>Has scheduling a meet-up ever been so easy?</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Stuff;