import React from "react";

const DisplayWeather = ({ weather }) => {
  const dateTime = new Date();
  const time = `${dateTime.getHours()}:${dateTime.getMinutes()}`;

  return (
    <>
      {weather.map((weathers) => (
        <div
          className="rounded flex flex-col justify-center items-center text-center p-6 bg-white"
          key={weathers.id}
        >
          <div className="text-md font-bold flex flex-col text-gray-900">
            <span className="mt-8">
              <img
                src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`}
                alt="logo"
              />
              <span className="text-xl font-semibold my-2">
                {weathers.name}, {weathers.sys.country}
              </span>
              <div className="font-normal text-sm">Time {time}</div>
              <div>{weathers.main.temp} &deg; C</div>
              <div>{weathers.weather[0].description}</div>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
export default DisplayWeather;
