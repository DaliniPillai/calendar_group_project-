import React, { Component } from 'react';

class EventEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitleValue: '',
      locationTitleValue: '',
      timeStartValue: '',
      timeEndValue: '',
      noteValue: '',
    }
    this.handleEventTitleInput = this.handleEventTitleInput.bind(this);
    this.handleLocationTitleInput = this.handleLocationTitleInput.bind(this);
    this.handleTimeStartInput = this.handleTimeStartInput.bind(this);
    this.handleTimeEndInput = this.handleTimeEndInput.bind(this);
    this.handleNoteInput = this.handleNoteInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    console.log('submitted');
    event.preventDefault();
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

  handleTimeStartInput(event) {
    console.log(event.target.value);
    this.setState({
      timeStartValue: event.target.value
    });
  }

  handleTimeEndInput(event) {
    console.log(event.target.value);
    this.setState({
      timeEndValue: event.target.value
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
          <select>
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
          <select>
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
          <select>
            <option value='0'>AM</option>
            <option value='12'>PM</option>
          </select><br />
          <label>End</label>
          <select>
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
          <select>
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
          <select>
            <option value='0'>AM</option>
            <option value='12'>PM</option>
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
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EventEdit;