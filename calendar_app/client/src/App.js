import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Carousel from 'nuka-carousel';
import Widget from './components/Widget';
import Agenda from './components/Agenda';
import DayView from './components/DayView';
import SingleDayView from './components/SingleDayView';


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
      selectedEvent: 0,
      inputEventValue: '',
      isLoaded: false,
      currentSlide: 0,
    }
    
    this.handleInputEventChange = this.handleInputEventChange.bind(this);
    this.onEventSelect = this.onEventSelect.bind(this);
    
  }

  

  fetchAllEvents() {
    fetch('/api/events')
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        console.log(jsonRes);
        setInterval(() => {
          this.setState({
            eventsData: jsonRes.eventsData,
            currentTime: new Date(),
            isLoaded: true
      
          });
        }, 1000);
      });
  }

  componentDidMount() {
    this.fetchAllEvents();
    // setInterval(() => {
    //   this.setState((prevState) => {
    //     return {
    //       currentTime: new Date()
    //     };
    //   })
    // }, 1000)
    

  }

handleInputEventChange(event) {
  this.setState({handleInputEventChange: event.target.value});
}
onEventSelect(id) {
  let idx;
  for(let i=0; i < this.state.eventsData; i++) {
    if(this.state.eventsData[i].id === id) {
      idx=i;
      break;
    }
  }
  console.log(idx);
  this.setState((prevState) => {
    return {
      selectedEvent: idx,
      currentSlide: 3,
    }
  })
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
              onEventSelect={this.onEventSelect}
            />

            {this.state.isLoaded === true ? <SingleDayView className="dayView"

              eventsData={this.state.eventsData}
              selectedEvent={this.state.selectedEvent}

              
            /> : ''}

              
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;