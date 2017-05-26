import React, { Component } from 'react';

class SingleDayView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.selectedEvent);
    console.log(this.props.eventsData);

    return (
      <div className="dayView">
           <button> {this.props.eventsData[this.props.selectedEvent].event_title}</button>
          
       
      </div>
    );
  }
}

export default SingleDayView;
