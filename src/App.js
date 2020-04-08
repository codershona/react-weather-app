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
    country: undefined
  };
  this.getWeather();


 }

 getWeather = async () => {
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

   const response = await api_call.json();

   console.log(response);

   this.setState({
    city: response.name,
    country: response.sys.country
   })


 };

  render() {
    return (
  <div className="App">
      
      <Weather city={this.state.city} country={this.state.country} />

    </div>


      );
  }

}


export default App ;

