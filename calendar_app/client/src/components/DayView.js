import React, { Component } from 'react';

class DayView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dayEvents = this.props.eventsData.filter((event) => {
      const eventDay = new Date(parseInt(event.time_start));
      eventDay.setHours(0);
      eventDay.setMinutes(0);
      eventDay.setSeconds(0);
      eventDay.setMilliseconds(0); 
      return (this.props.selectedDay.valueOf() === eventDay.valueOf());
    });
    return (
      <div className="dayView">
        <button className="addEventButton"> 
          <p className="plus">+</p>
        </button>
        <button className="event"><p>1:00pm-2:00pm</p><h1>Brunch</h1></button><br/>
        {dayEvents.map((event, i) => {
               console.log(new Date(parseInt(event.time_start)));
           console.log(new Date(parseInt(event.time_end)));
          let timeStartHours = new Date(parseInt(event.time_start)).getHours();
          let timeEndHours = new Date(parseInt(event.time_end)).getHours();
          const timeStartMins = new Date(parseInt(event.time_start)).getMinutes();
          const timeEndMins = new Date(parseInt(event.time_end)).getMinutes(); 
          const startAmPm = (timeStartHours < 12) ? 'am' : 'pm';
          const endAmPm = (timeEndHours < 12) ? 'am' : 'pm';
          timeStartHours = (timeStartHours === 0) ? 12 : timeStartHours % 12;
          timeEndHours = (timeEndHours === 0) ? 12 : timeEndHours % 12;
          const startMins = (timeStartMins >= 0 && timeStartMins < 10) ? ('0' + timeStartMins) : timeStartMins; 
          const endMins = (timeEndMins >= 0 && timeEndMins < 10) ? ('0' + timeEndMins) : timeEndMins; 
          

          return (
            <li key={i}>
        
              <button className="event">
                <p>{timeStartHours + ':' + startMins + startAmPm + '-' + timeEndHours + ':' + endMins + endAmPm }</p>
                <h1>{event.event_title}</h1>
                {/*<p>{new Date(parseInt(event.time_start)).toString()}</p>
                <p>{new Date(parseInt(event.time_end)).toString()}</p> */}
                
              </button>
            
            </li>
          );
        })} 
      </div>
    );
  }
}

export default DayView;
