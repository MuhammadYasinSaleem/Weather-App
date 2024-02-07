const baseurl="https://api.weatherapi.com/v1/current.json?key=fbc00d2ac8dc494197b165156240602";

export const Weatherdata=async (city)=>{
    const response=await fetch(`${baseurl}&q=${city}&aqi=yes`,{method:"GET"});
    return await response.json();
}

export const Weatherdataforlocation=async (lat,long)=>{
    const response=await fetch(`${baseurl}&q=${lat},${long}&aqi=yes`,{method:"GET"});
    return await response.json();
}