import { createContext,useContext,useState } from "react";
import { Weatherdata,Weatherdataforlocation } from "../api";

const weathercontext=createContext(null);

export const UseWeather=()=>{
return useContext(weathercontext);
}
export const WeatherProvider=(props)=>{
    const [data,setdata]=useState(null);
    const [searchCity,setSearchCity]=useState(null);

    const FetchData=async()=>{
        const response=await Weatherdata(searchCity);
        setdata(response);
    }
    const Fetchcurrentuserlocationdata=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            Weatherdataforlocation(position.coords.latitude,position.coords.longitude)
            .then((data)=>setdata(data))
        })
    }
    return(
        <weathercontext.Provider value={{data,FetchData,searchCity,setSearchCity,Fetchcurrentuserlocationdata}}>
{props.children}
        </weathercontext.Provider>
    )
}

