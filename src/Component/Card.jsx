import React from "react";
import { UseWeather } from "../context/weather";
const Card=()=>{
    const weather=UseWeather();
    return(
        <div className="Card">
<img className="image" src={weather?.data?.current?.condition?.icon} alt="icon"/>
<h2>{weather.data?.current?.temp_c} C</h2>
<h5>{weather.data?.location?.name},{weather.data?.location?.region},{weather.data?.location?.country}</h5>
        </div>
    )
}
export default Card