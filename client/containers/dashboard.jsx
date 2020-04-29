import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Circle from '../components/Circle.jsx';
import Line from '../components/Line.jsx';
//import NewCard from "../components/NewCard.jsx";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className="graphs">
      <div className="circle" style={{ width: 800, height: 500 }}>
          <Circle />
        </div>
        <div className="line" style={{ width: 900, height: 500 }}>
          <Line />
        </div>
        <footer className="footer">An Allok8 Iteration</footer>
      </div>
     //<NewCard />
    );
  }
}

export default Dashboard;
