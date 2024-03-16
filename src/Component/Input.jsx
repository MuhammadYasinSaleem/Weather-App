import React from "react";
import { UseWeather } from "../context/weather";
const Input=()=>{

    const weather=UseWeather();
    const call=(e)=>{
if(e.key==="Enter"){
    weather.FetchData();
}
    }
    return(
        <input className="input-field"
        placeholder="Enter a city..."
         value={weather.searchCity?weather.searchCity:""}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        onKeyPress={(e)=>call(e)}
        />
    )
}

export default Input