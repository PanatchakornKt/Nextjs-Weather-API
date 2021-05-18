import React, { useState } from "react";
import SearchWeather from "../components/SearchWeather";
import DisplayWeather from "../components/DisplayWeather";

const index = () => {
  const [weather, setWeather] = useState([]);

  return (
    <>
      <title>Weather App</title>
      <SearchWeather weather={weather} setWeather={setWeather} />
      <DisplayWeather weather={weather} />
    </>
  );
};

export default index;
