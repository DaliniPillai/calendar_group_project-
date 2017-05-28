import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Carousel from 'nuka-carousel';
import Widget from './components/Widget';
import Agenda from './components/Agenda';
import DayView from './components/DayView';
import AddEvent from './components/AddEvent';


class App extends Component {
  constructor(props) {
    super(props);
    const currentDay = new Date();
    currentDay.setHours(0);
    currentDay.setMinutes(0);
    currentDay.setSeconds(0);
    currentDay.setMilliseconds(0);
    console.log(currentDay);
    this.state = {
      eventsData: [],
      locationsData: [],
      currentTime: new Date(),
      selectedDay: currentDay,
      inputEventValue: '',
      currentSlide: 0,
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

  fetchAllLocations() {
    fetch('/api/locations')
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        console.log(jsonRes);
        this.setState({
          locationsData: jsonRes.locationsData
        });
      });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        return {
          currentTime: new Date()
        };
      })
    }, 1000)
    this.fetchAllEvents();
    this.fetchAllLocations();

  }

handleInputEventChange(event) {
  this.setState({handleInputEventChange: event.target.value});
}
handleEventEdit(event) {
  event.preventDefault();
}

  render() {
    // console.log(this.state.currentTime);
  	  var settings = {
    	dots: true
    }
    return (
      <div className="App">
        <div className="App-header">
        
        <p>{this.state.currentTime.toString()}</p>
          <h2>Welcome to DRI Cal</h2>
        </div>
        <div className="App-widget">
          <Widget/>
        </div>
        <div className="App-cal">
          <Carousel slideIndex={this.state.currentSlide}>
           
            <InfiniteCalendar
              width={300}
              height={200}
              onSelect={((date) => {
                alert('You selected: ' + date.toString());
                if(this.state.selectedDay.valueOf() === date.valueOf()) {
                  console.log("equal");
                }else {
                  console.log("not equal");

                }
                this.setState((prevState) => {
                  return {
                    selectedDay: date,
                    currentSlide: 2,
                  };
                          
                })
              })}
            />
           
            <Agenda eventsData={this.state.eventsData}/>
            <DayView className="dayView"
              eventsData={this.state.eventsData}
              selectedDay={this.state.selectedDay}
            />
            <AddEvent
              className="dayView"
            />
              
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;