import React, { Component } from 'react';
import timeConversions from '../library/timeConversions';

class EventEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitleValue: this.props.eventsData[this.props.selectedEvent].event_title,
      locationTitleValue: '',
      timeStartHoursValue: '12',
      timeStartMinsValue: '00',
      timeStartAmPmValue: 'am',
      timeEndHoursValue: '12',
      timeEndMinsValue: '00',
      timeEndAmPmValue: 'am',
      noteValue: '',
    }
    this.handleEventTitleInput = this.handleEventTitleInput.bind(this);
    this.handleLocationTitleInput = this.handleLocationTitleInput.bind(this);
    this.handleTimeStartHoursInput = this.handleTimeStartHoursInput.bind(this);
    this.handleTimeStartMinsInput = this.handleTimeStartMinsInput.bind(this);
    this.handleTimeStartAmPmInput = this.handleTimeStartAmPmInput.bind(this);
    this.handleTimeEndHoursInput = this.handleTimeEndHoursInput.bind(this);
    this.handleTimeEndMinsInput = this.handleTimeEndMinsInput.bind(this);
    this.handleTimeEndAmPmInput = this.handleTimeEndAmPmInput.bind(this);
    this.handleNoteInput = this.handleNoteInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    fetch(`/api/events/${event.target.id.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_title: this.state.eventTitleValue,
        location_id: 1,
        time_start: timeConversions.timeAmPmToEpoch(
          this.props.selectedDay.getFullYear(),
          this.props.selectedDay.getMonth(),
          this.props.selectedDay.getDate(),
          this.state.timeStartHoursValue,
          this.state.timeStartMinsValue,
          this.state.timeStartAmPmValue
        ),
        time_end: timeConversions.timeAmPmToEpoch(
          this.props.selectedDay.getFullYear(),
          this.props.selectedDay.getMonth(),
          this.props.selectedDay.getDate(),
          this.state.timeEndHoursValue,
          this.state.timeEndMinsValue,
          this.state.timeEndAmPmValue
        ),
        note: this.state.noteValue
      })
    })
    .then(res => {
      return res.json();
    })
    .then(jsonRes => {
      console.log(jsonRes);
      if (jsonRes.message === 'ok') {
        const editedEvent = {
          id: jsonRes.event.id,
          event_title: jsonRes.event.event_title,
          location_id: jsonRes.event.location_id,
          time_start: jsonRes.event.time_start,
          time_end: jsonRes.event.time_end,
          first_reminder: jsonRes.event.first_reminder,
          second_reminder: jsonRes.event.second_reminder
        };
        this.props.onEditEvent(editedEvent);
        this.setState(prevState => {
          return {
            eventTitleValue: '',
            locationTitleValue: '',
            timeStartHoursValue: '',
            timeStartMinsValue: '',
            timeStartAmPmValue: '',
            timeEndHoursValue: '',
            timeEndMinsValue: '',
            timeEndAmPmValue: '',
            noteValue: '',
          };
        });
      } else {
        console.log('error');
      }
    });
  }

  handleEventTitleInput(event) {
    console.log(event.target.value);
    this.setState({
      eventTitleValue: event.target.value
    });
  }

  handleLocationTitleInput(event) {
    console.log(event.target.value);
    this.setState({
      locationTitleValue: event.target.value
    });
  }

  handleTimeStartHoursInput(event) {
    console.log(event.target.value);
    this.setState({
      timeStartHoursValue: event.target.value
    });
  }

  handleTimeStartMinsInput(event) {
    console.log(event.target.value);
    this.setState({
      timeStartMinsValue: event.target.value
    });
  }

  handleTimeStartAmPmInput(event) {
    console.log(event.target.value);
    this.setState({
      timeStartAmPmValue: event.target.value
    });
  }

  handleTimeEndHoursInput(event) {
    console.log(event.target.value);
    this.setState({
      timeEndHoursValue: event.target.value
    });
  }

  handleTimeEndMinsInput(event) {
    console.log(event.target.value);
    this.setState({
      timeEndMinsValue: event.target.value
    });
  }

  handleTimeEndAmPmInput(event) {
    console.log(event.target.value);
    this.setState({
      timeEndAmPmValue: event.target.value
    });
  }

  handleNoteInput(event) {
    console.log(event.target.value);
    this.setState({
      noteValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Edit Event</h1>
        <h2>{this.props.selectedDay.toDateString()}</h2>
        <form
          className="add-event-form"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            value={this.state.eventTitleValue}
            onChange={this.handleEventTitleInput}
            placeholder="Title"
          /><br />
          {/*<input
            type="text"
            value={this.state.locationTitleValue}
            onChange={this.handleLocationTitleInput}
            placeholder="Location"
          /><br />*/}
          <label>Start</label>
          <select value={this.state.timeStartHoursValue} onChange={this.handleTimeStartHoursInput}>
            <option value="12">12</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
          <select value={this.state.timeStartMinsValue} onChange={this.handleTimeStartMinsInput}>
            <option value="00">00</option>
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </select>
          <select value={this.state.timeStartAmPmValue} onChange={this.handleTimeStartAmPmInput}>
            <option value='am'>AM</option>
            <option value='pm'>PM</option>
          </select><br />
          <label>End</label>
          <select value={this.state.timeEndHoursValue} onChange={this.handleTimeEndHoursInput}>
            <option value="12">12</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
          <select value={this.state.timeEndMinsValue} onChange={this.handleTimeEndMinsInput}>
            <option value="00">00</option>
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </select>
          <select value={this.state.timeEndAmPmValue} onChange={this.handleTimeEndAmPmInput}>
            <option value='am'>AM</option>
            <option value='pm'>PM</option>
          </select><br />
          {/*<input
            type="text"
            value={this.state.timeStartValue}
            onChange={this.handleTimeStartInput}
            placeholder="Start Time"
          /><br />
          <input
            type="text"
            value={this.state.timeEndValue}
            onChange={this.handleTimeEndInput}
            placeholder="End Time"
          /><br />*/}
          <input
            type="text"
            value={this.state.noteValue}
            onChange={this.handleNoteInput}
            placeholder="Note"
          /><br />
          <input
            style={{visibility: 'hidden'}}
            readOnly
            name="id"
            value={this.props.eventsData[this.props.selectedEvent].id}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EventEdit;

