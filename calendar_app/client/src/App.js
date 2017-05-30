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
import AddEvent from './components/AddEvent';
import EventEdit from './components/EventEdit';

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
    this.onAddEventClick = this.onAddEventClick.bind(this);
    this.onEventEdit = this.onEventEdit.bind(this);
    this.onAddEvent = this.onAddEvent.bind(this);
    this.onEditEvent = this.onEditEvent.bind(this);
    
  }

  

  fetchAllEvents() {
    fetch('/api/events')
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        console.log(jsonRes);
        this.setState({
          eventsData: jsonRes.eventsData,
          isLoaded: true
        })
        setInterval(() => {
          this.setState((prevState) => {
            
            return {currentTime: new Date() }
            
      
          });
        }, 1000);
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
    this.fetchAllEvents();
    // setInterval(() => {
    //   this.setState((prevState) => {
    //     return {
    //       currentTime: new Date()
    //     };
    //   })
    // }, 1000)
    
    this.fetchAllLocations();

  }

onAddEventClick() {
  this.setState((prevState) => {
    return {
      currentSlide: 4,
    };
  });
}

onEventEdit(id) {
  let idx=0;
  while(this.state.eventsData[idx].id !== id) {
    idx++;
  }
  console.log("IDXXXXX", idx);
  console.log(this.state.eventsData[0]);
  console.log(id);
  this.setState((prevState) => {
    return {
      selectedEvent: idx,
      currentSlide: 5,
    }
  })
}

  onAddEvent(newEvent) {
    console.log(newEvent);
    this.setState(prevState => {
      return {
        eventsData: prevState.eventsData.concat([newEvent]),
      };
    });
  }

  onEditEvent(editedEvent) {
    console.log(editedEvent);
    this.setState(prevState => {
      prevState.eventsData[prevState.selectedEvent] = editedEvent;
      return {
        eventsData: prevState.eventsData
      };
    });
  }

handleInputEventChange(event) {
  this.setState({handleInputEventChange: event.target.value});
}
onEventSelect(id) {
  let idx=0;
  while(this.state.eventsData[idx].id !== id) {
    idx++;
  }
  console.log("IDXXXXX", idx);
  console.log(this.state.eventsData[0]);
  console.log(id);
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
          <Carousel 
          slideIndex={this.state.currentSlide}
          afterSlide={((slide) => {
            this.setState((prevState) => {
              return {currentSlide: slide }

            })
          })}
          >
           
            <InfiniteCalendar
              
              
              
              onSelect={((date) => {
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
              onAddEventClick={this.onAddEventClick}
            />

            { this.state.isLoaded === true ? 
            <SingleDayView className="dayView"

              eventsData={this.state.eventsData}
              selectedEvent={this.state.selectedEvent}
              isLoaded={this.state.isLoaded}
              onEventEdit={this.onEventEdit}
              
            /> : "" }

            <AddEvent
              className="dayView"
              selectedDay={this.state.selectedDay}
              onAddEvent={this.onAddEvent}
            />
            { this.state.isLoaded === true ?
              <EventEdit 
                className="dayView"
                selectedDay={this.state.selectedDay}
                eventsData={this.state.eventsData}
                selectedEvent={this.state.selectedEvent}
                onEditEvent={this.onEditEvent}
              /> : '' }
              
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;