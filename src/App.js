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
  },[])
  return (
    <div className="App">
   <h1>Weather App</h1>
   <Input/><br></br>
   <Button onClick={weather.FetchData} value="Search"/>
   <Card/>
    </div>
  );
}

export default App;
