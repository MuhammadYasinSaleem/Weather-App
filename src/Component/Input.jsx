import React from "react";
import { UseWeather } from "../context/weather";
const Input=()=>{

    const weather=UseWeather();
    
    return(
        <input className="input-field"
        placeholder="Search here"
         value={weather.searchCity?weather.searchCity:""}
        onChange={(e)=>weather.setSearchCity(e.target.value)}/>
    )
}

export default Input