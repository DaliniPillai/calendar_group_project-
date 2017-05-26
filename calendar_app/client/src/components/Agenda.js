import React, { Component } from 'react';

class Agenda extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentDate = new Date();
    return (
      <div>
        <h3>Agenda</h3>
        {this.props.eventsData.map((event, i) => {
          const timeStart = new Date(parseInt(event.time_start)).getHours();
          const timeEnd = new Date(parseInt(event.time_end)).getHours();
          const startAmPm = (timeStart < 12) ? 'AM' : 'PM';
          const endAmPm = (timeEnd < 12) ? 'AM' : 'PM';
          return (
            <li key={i}>
              <span>{(timeStart % 12) + ' ' + startAmPm}</span>
              <span>{(timeEnd % 12) + ' ' + endAmPm}</span>
              <span>{event.event_title}</span>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Agenda;
