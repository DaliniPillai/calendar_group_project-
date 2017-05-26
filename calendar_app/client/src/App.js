import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Carousel from 'nuka-carousel';
import Widget from './components/Widget';
import Agenda from './components/Agenda';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [],
      inputEventValue: '',
    }
    
    this.handleInputEventChange = this.handleInputEventChange.bind(this);
    this.handleEventEdit = this.handleEventEdit.bind(this);
  }

  fetchAllEvents() {
    fetch('/api/events')
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        console.log(jsonRes);
        this.setState({
          eventsData: jsonRes.eventsData
        });
      });
  }

  componentDidMount() {
    this.fetchAllEvents();
  }

handleInputEventChange(event) {
  this.setState({handleInputEventChange: event.target.value});
}
handleEventEdit(event) {
  event.preventDefault();
}

  render() {
  	  var settings = {
    	dots: true
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to DRI Cal</h2>
        </div>
        <div className="App-widget">
          <Widget/>
        </div>
        <div className="App-cal">
          <Carousel>
          
            <InfiniteCalendar
              width={300}
              height={200}
            />
            <button className="addButton"> 
              <p className="plus">+</p>
            </button>
            <Agenda eventsData={this.state.eventsData}/>
              
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;