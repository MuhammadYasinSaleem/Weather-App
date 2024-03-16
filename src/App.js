import './App.css';
import { useEffect } from 'react';
import Input from './Component/Input';
import Button from './Component/Button';
import Card from './Component/Card';
import { UseWeather } from './context/weather';
function App() {
  const weather=UseWeather();
  useEffect(()=>{
weather.Fetchcurrentuserlocationdata();
  },[weather.searchCity])
  return (
    <main>
      <h1>Weather App</h1>
   <Input/><Button onClick={weather.FetchData} value="Search"/>
    <div className="App">
     <Card/>
   
    </div>
    </main>
  );
}

export default App;
