import React from "react";
import Weather from "./app_component/weather.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";


// api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "478cc3c9e7cd7db831d6f004db3d70f7";

class App extends React.Component {
 constructor() {
  super();
  this.state = {
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: "",
    error: false

  };

  this.getWeather();

}

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;

  }



 getWeather = async () => {
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

   const response = await api_call.json();

   console.log(response);

   this.setState({
    city: response.name,
    country: response.sys.country,
    celsius: this.calCelsius(response.main.temp),
    temp_max: this.calCelsius(response.main.temp_max),
    temp_min: this.calCelsius(response.main.temp_min),
    description: response.weather[0].description


   });


 };

  render() {
    return (
  <div className="App">
      
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celcius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}


       />

    </div>


      );
  }

}


export default App ;

