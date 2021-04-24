import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./main";



// Additional views
// import Login from './views/login.js';
// import Home from './views/XXhome.js';

ReactDOM.render(
  // <Router>
  //   <Switch>
  //     <Route exact path='/'><Redirect to='/home' /></Route>
  //     <Route exact path='/home' component={Home} />
  //   </Switch>
  // </Router>,
  <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
