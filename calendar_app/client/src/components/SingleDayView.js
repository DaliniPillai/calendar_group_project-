import React, { Component } from 'react';
import timeConversions from '../library/timeConversions';

class SingleDayView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.selectedEvent);
    console.log(this.props.eventsData);
    

    return (
      <div className="dayView">
        <h1> 
           {this.props.eventsData[this.props.selectedEvent].event_title}
             
        </h1>
        <p>{this.props.eventsData[this.props.selectedEvent].location_title}</p>
        <p>{timeConversions.printTimeRange(
          this.props.eventsData[this.props.selectedEvent].time_start,
          this.props.eventsData[this.props.selectedEvent].time_end
        )}
        </p>
        <button onClick={() => this.props.onEventEdit(this.props.eventsData[this.props.selectedEvent].id)}>
          <p>Edit</p>
        </button>
        <button><p>Delete</p></button>
  
          
       
      </div>
    );
  }
}

export default SingleDayView;
