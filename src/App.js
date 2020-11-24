import './App.css';
import Events from './components/Events'
import CreateEvent from './components/CreateEvent'
import Saved from "./components/Saved"
import NavBar from "./components/NavBar"

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {v4 as uuid} from 'uuid';

export class App extends Component {

  state = {
    events: [{
      name: 'Welcome Week Parade',
      location: 'MUSC',
      food: 'Pizza',
      pic: '1.jpg',
      details: "Free Hot Dogs at MUSC on September 6th! First come first serve so dont be late!",
      date: "September 6th 2020",
      id: uuid()
    },
    {
      name: 'Hatch Opening Party',
      location: 'Gerald Hatch Building',
      food: 'Burgers',
      pic: '2.jpg',
      details: "Free Burgers at Hatch on September 8th to celebrate the opening of the new building!",
      date: "September 8th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Robotics Club',
      location: 'JHE 263',
      food: 'BBQ',
      pic: '3.jpg',
      details: "Come to our Annual Robotics BBQ at JHE! Raffles and Prizes will be available.",
      date: "September 14th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Competitive Programming Team',
      location: 'JHE 263',
      food: 'Fried Chicken',
      pic: '4.jpg',
      details: "Come to our intro to programing workshop, we'll have Popeyes!",
      date: "September 12th 2020",
      id: uuid()
    },
    {
      name: 'Student Union Event',
      location: 'MUSC Lobby',
      food: 'Biryani',
      pic: '5.jpg',
      details: "Come to MUSC for some FREE BIRYANI! First come first serve while quantities last.",
      date: "September 18th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Poetry Club',
      location: 'Bridges',
      food: 'Cheese and Crackers',
      pic: '6.jpg',
      details: "Come enjoy our first poetry slam of the semester! Free cheese and crackers!",
      date: "September 10th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Guitar Club',
      location: 'BSB 201',
      food: 'Assorted Foods',
      pic: '7.jpg',
      details: "Come vibe out at our first open mic! Variety of free foods.",
      date: "September 10th 2020",
      id: uuid()
    },
    {
      name: 'Welcome Week Parade',
      location: 'MUSC',
      food: 'Pizza',
      pic: '1.jpg',
      details: "Free Hot Dogs at MUSC on September 6th! First come first serve so dont be late!",
      date: "September 6th 2020",
      id: uuid()
    },
    {
      name: 'Hatch Opening Party',
      location: 'Gerald Hatch Building',
      food: 'Burgers',
      pic: '2.jpg',
      details: "Free Burgers at Hatch on September 8th to celebrate the opening of the new building!",
      date: "September 8th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Robotics Club',
      location: 'JHE 263',
      food: 'BBQ',
      pic: '3.jpg',
      details: "Come to our Annual Robotics BBQ at JHE! Raffles and Prizes will be available.",
      date: "September 14th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Competitive Programming Team',
      location: 'JHE 263',
      food: 'Fried Chicken',
      pic: '4.jpg',
      details: "Come to our intro to programing workshop, we'll have Popeyes!",
      date: "September 12th 2020",
      id: uuid()
    },
    {
      name: 'Student Union Event',
      location: 'MUSC Lobby',
      food: 'Biryani',
      pic: '5.jpg',
      details: "Come to MUSC for some FREE BIRYANI! First come first serve while quantities last.",
      date: "September 18th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Poetry Club',
      location: 'Bridges',
      food: 'Cheese and Crackers',
      pic: '6.jpg',
      details: "Come enjoy our first poetry slam of the semester! Free cheese and crackers!",
      date: "September 10th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Guitar Club',
      location: 'BSB 201',
      food: 'Assorted Foods',
      pic: '7.jpg',
      details: "Come vibe out at our first open mic! Variety of free foods.",
      date: "September 10th 2020",
      id: uuid()
    },
    {
      name: 'Welcome Week Parade',
      location: 'MUSC',
      food: 'Pizza',
      pic: '1.jpg',
      details: "Free Hot Dogs at MUSC on September 6th! First come first serve so dont be late!",
      date: "September 6th 2020",
      id: uuid()
    },
    {
      name: 'Hatch Opening Party',
      location: 'Gerald Hatch Building',
      food: 'Burgers',
      pic: '2.jpg',
      details: "Free Burgers at Hatch on September 8th to celebrate the opening of the new building!",
      date: "September 8th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Robotics Club',
      location: 'JHE 263',
      food: 'BBQ',
      pic: '3.jpg',
      details: "Come to our Annual Robotics BBQ at JHE! Raffles and Prizes will be available.",
      date: "September 14th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Competitive Programming Team',
      location: 'JHE 263',
      food: 'Fried Chicken',
      pic: '4.jpg',
      details: "Come to our intro to programing workshop, we'll have Popeyes!",
      date: "September 12th 2020",
      id: uuid()
    },
    {
      name: 'Student Union Event',
      location: 'MUSC Lobby',
      food: 'Biryani',
      pic: '5.jpg',
      details: "Come to MUSC for some FREE BIRYANI! First come first serve while quantities last.",
      date: "September 18th 2020",
      id: uuid()
    },
    {
      name: 'McMaster Poetry Club',
      location: 'Bridges',
      food: 'Cheese and Crackers',
      pic: '6.jpg',
      details: "Come enjoy our first poetry slam of the semester! Free cheese and crackers!",
      date: "September 10th 2020",
      id: uuid()
    },
    ],

    savedEvents: [
    ],
  }

  saveEvent = (event) => {
    if(!this.state.savedEvents.includes(event)){
      this.setState( {savedEvents: [...this.state.savedEvents, event]})
      console.log("Added Event")
    }
  };
  
  delEvent = (savedEvent) => {
		this.setState({ savedEvents: [...this.state.savedEvents.filter(event => event !== savedEvent)]});
	}

  addEvent = (eventDetails) => {
    const newEvent = {
      name: eventDetails.eventName,
      location: eventDetails.location,
      food: eventDetails.food,
      pic: '1.jpg',
      details: eventDetails.details,
      date: eventDetails.date,
      id: uuid()
		}
		this.setState({ events: [...this.state.events, newEvent]})
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Events events={this.state.events} saveEvent={this.saveEvent} savedEvents={this.state.savedEvents}/>
            </React.Fragment>
          )} />          
          <Route path="/Create" render={props => (
            <CreateEvent addEvent={this.addEvent} />
          )} />
          <Route path="/Saved" render={props => (
              <Saved  savedEvents={this.state.savedEvents} delEvent={this.delEvent}/>
          )} /> 
        </div>
      </Router>
    )
  }
}

export default App

