import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2e0f645d32cfc88886adc65fe800c89b';

class Widget extends Component {
    
    constructor() {
        super();
        this.state = { 
        inputZipValue: null,
        location: null,
        temp: null,
        description: null,
        min: null,
        max: null,
        }
    }

    findWeather(zip) {
        fetch(`${BASE_URL}?q=${zip},us&appid=${API_KEY}`)
        .then((res) => {
            res.json()
            .then((json) => {
                console.log('json: ', json);
                console.log('fetch: ', `${BASE_URL}?q=${zip},us&appid=${API_KEY}`);

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
                return;
            });
        });
    }

    render() {
        return (
            <Carousel slidesToShow={1} cellAlign="center">
                <h4 id="location">Location: {this.props.location}</h4>
                <h1 id="temp">Temp: {this.props.temp}</h1>
                <h2 id="description">Description: {this.props.description}</h2>
            </Carousel>
        );

    }
}

export default Widget;