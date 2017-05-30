import React, { Component } from 'react';


const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2e0f645d32cfc88886adc65fe800c89b';
const zip = 10024;

class Widget extends Component {
    
    constructor() {
        super();
        this.state = { 
            zip: null,
            location: null,
            temp: null,
            description: null,
            min: null,
            max: null,
            find: this.find.bind(this)
        }
        this.find = this.find.bind(this);
        
    }


    find(zip) {
        fetch(`${BASE_URL}?q=10024,us&appid=${API_KEY}`)
        .then((res) => {
            res.json()
            .then((json) => {
                console.log('json: ', json);
                console.log('fetch: ', `${BASE_URL}?q=10024,us&appid=${API_KEY}`);

                const location = json.name;
                const temp = `${Math.round(json.main.temp *  9/5 - 459.67)}°F`;
                const description = json.weather[0].description;

                const min = `${Math.round(json.main.temp_min * 9/5 - 459.67)}°F`;
                const max = `${Math.round(json.main.temp_max * 9/5 - 459.67)}°F`;

                this.setState({
                    zip: zip,
                    location: location,
                    temp: temp,
                    description: description,
                    min: min,
                    max: max,
                });
                console.log('temp: ' + temp);
                return;
            });
        });
    }

    

    render() {
        return (
            
                <div className="weather">
                    <h3 id="location"> {this.state.location}</h3>
                    <h3 className="temp">{this.state.temp}</h3>
                    <h3 id="description"> {this.state.description}</h3>
                    <button className="getWeather"onClick={this.state.find}>Click for Weather</button>
                    <button className="home"><a href="/">Take Me Home</a></button>
                </div>
            
        );

    }
}

export default Widget;