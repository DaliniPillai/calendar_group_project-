import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'nuka-carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEventValue: '',
    }
    
    this.handleInputEventChange = this.handleInputEventChange.bind(this);
    this.handleEventEdit = this.handleEventEdit.bind(this);
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
        <Carousel cellAlign="center" width="400px" margin="0 auto">
            <InfiniteCalendar
              width={400}
              height={600}
              onSelect={(date) => {
                console.log(date.toDateString());
                alert('You selected: ' + (date.toDateString()));
                }
              } 
              
          />
          <form>
                 <label>
                  Name:
                    <input type="text" name="name" />
                 </label>
                    <input type="submit" value="Submit" />
              </form>
          <InfiniteCalendar
            width={200}
            height={200}
            
          />
          <InfiniteCalendar
              width={200}
              height={300}
          />
          <InfiniteCalendar/>
        
        </Carousel>
        
      </div>
    );
  }
}

export default App;