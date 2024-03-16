import React from "react";
import { UseWeather } from "../context/weather";
import day from "../images/daysky.jpg";
import night from '../images/night.jpg'

const Card = () => {
    const weather = UseWeather();
    weather.data?.current.is_day===1?
    document.body.style.backgroundImage = `url(${day})`:
    document.body.style.backgroundImage = `url(${night})`;

    return (
        <div className="Card">
            {weather.data? (<><img className="image" src={weather?.data?.current?.condition?.icon} alt="icon" />
            <div>
                <h1>{weather.data?.location?.name}</h1>
                <h3 style={{ color: "gray" }}>{weather.data?.location?.region},{weather.data?.location?.country}</h3>
                <h2>{weather.data?.current?.temp_c} C</h2>
                <h3>{weather.data?.location.localtime}</h3>
            </div></>):(<h1>
                Turn on Location
            </h1>)}
            
        </div>
    );
}

export default Card;
