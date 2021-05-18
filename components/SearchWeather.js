import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert";

const SearchWeather = ({ weather, setWeather }) => {
  const [city, setCity] = useState("");
  const [weatherlist, setWeatherlist] = useState([]);

  const callWeatherapi = async (city) => {
    try {
      const filter = await {
        api: "http://api.openweathermap.org/data/2.5/weather",
        c: city,
        appid: "653fea40ab24e6bf037baeada82267b3",
        units: "metric",
      };
      const url = `${filter.api}?q=${filter.c}&appid=${filter.appid}&units=${filter.units}`;
      const result = await axios.get(url);
      const data = result.data;
      const newData = [...weather, data];
      setWeather(newData);
      //console.log(newData)
    } catch (error) {
      Swal({
        title: "Error",
        text: "City not found!",
        icon: "error",
        confirmButtonText: "ok",
      });
      setWeatherlist(city);
      setCity("");
    }
  };

  const onDeleteWeather = () => {
    setWeather([]);
  };

  return (
    <>
      <div className="rounded flex flex-col justify-center items-center text-center p-3 bg-white">
        <p className="text-2xl font-bold">Weather App</p>
      </div>
      <form
        className="text-center container mx-auto px-6 py-3 p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="   Enter the city"
          onChange={(e) => setCity(e.target.value)}
          className="rounded-xl shadow appearance-none border rounded py-2 px-6 text-grey-darker"
        />
        <button
          type="submit"
          onClick={() => callWeatherapi(city)}
          className="ml-2 rounded-full font-bold px-4 py-3 transition duration-300 ease-in-out mr-6"
        >
          Search
        </button>
        <button
          onClick={onDeleteWeather}
          className="ml-2 rounded-md py-1 focus:outline-none bg-gray-100"
        >
          Clear
        </button>
        <label className="ml-2 puppercase font-semibold tracking-wide text-gray-700 px-2 py-1 mt-2 focus:outline-none  text-xs">
          All places : {weather.length}
        </label>
      </form>
    </>
  );
};
export default SearchWeather;
