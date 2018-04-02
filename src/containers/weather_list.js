import React, { Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts';
import GoogleMap from '../components/google_map';
 

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }
    renderWeather(cityData) {
            const name = cityData.city.name;
            const temps = cityData.list.map(data => data.main.temp);
            const pressures = cityData.list.map(data => data.main.pressure);
            const humadities = cityData.list.map(data => data.main.humidity);
            const {lat, lon} = cityData.city.coord;
            console.log(lat, lon);
            return (
                <tr key={name}>
                    <td><GoogleMap lon={lon} lat={lat}/></td>
                    <td><Chart height={120} width={180} data = {temps} color = "orange" units ="k"/></td>
                    <td><Chart height={120} width={180} data = {pressures} color = "green" units="hPa"/></td>
                    <td><Chart height={120} width={180} data = {humadities} color = "black" units="%"/></td>
                </tr>
            );
    }

    render() {     
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temparature (k)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humadity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
               </tbody>
              </table> 
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
