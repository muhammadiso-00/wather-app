import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { ToastContainer, toast } from "react-toastify";

const TodayBlock = lazy(() => import("./components/TodayBlock"));
const TodayExtra = lazy(() => import("./components/TodayExtra"));
const DayBlocks = lazy(() => import("./components/DayBlocks"));

import Sunny from "/sunny.svg";
import Cloudy from "/cloudy.svg";
import SmallRain from "/small_rain.svg";
import SmallSun from "/small_sun.svg";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState("Tashkent");
  const [error, setError] = useState(null);
  const API_KEY = "a274a0d2013bb5410040b94bcb612e7a";

  useEffect(() => {
    const localCity = localStorage.getItem("city");
    if (localCity) setCity(localCity);
  }, []);

  const weatherIcons = {
    Clear: SmallSun,
    Clouds: Cloudy,
    Rain: SmallRain,
    Default: Sunny,
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const cachedWeather = localStorage.getItem(city);

      if (cachedWeather) {
        setWeatherData(JSON.parse(cachedWeather));
        return;
      }

      try {
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const weatherData = weatherResponse.data;

        const utcOffsetSeconds = weatherData.timezone;
        const utcTime = new Date();
        const localTime = new Date(utcTime.getTime() + utcOffsetSeconds * 1000);

        const formattedWeatherData = {
          celc: `${Math.round(weatherData.main.temp)}°`,
          city: weatherData.name,
          day: localTime.toLocaleDateString("ru-RU", { weekday: "long" }),
          time: localTime.toLocaleTimeString("uz-UZ"),
          img:
            weatherIcons[weatherData.weather[0].main] || weatherIcons.Default,
          temp: Math.round(weatherData.main.feels_like),
          osadkov: weatherData.weather[0].description,
          wind: weatherData.wind.speed,
          pressure: weatherData.main.pressure,
        };

        setWeatherData(formattedWeatherData);
        localStorage.setItem(city, JSON.stringify(formattedWeatherData));
      } catch (err) {
        setError("Ob-have ma'lumotlarni yuklashda xatolik !");
        toast.error("Error:", err);
      }
    };

    fetchWeather();
  }, [city]); 

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${API_KEY}`
        );
        const forecastList = forecastResponse.data.list;

        const formattedForecast = forecastList.reduce((uniqueDays, item) => {
          const forecastTime = new Date(item.dt * 1000);

          const dateKey = forecastTime.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
          });

          if (!uniqueDays.some((day) => day.date === dateKey)) {
            uniqueDays.push({
              temp: `${Math.round(item.main.temp)}°`,
              tempNight: `${Math.round(item.main.temp_min)}°`,
              day: forecastTime.toLocaleDateString("ru-RU", {
                weekday: "long",
              }),
              date: dateKey,
              img: weatherIcons[item.weather[0].main] || weatherIcons.Default,
              weatherStatus: item.weather[0].description,
            });
          }

          return uniqueDays;
        }, []);

        setForecastData(formattedForecast);
      } catch (err) {
        setError("Ob-have ma'lumotlarni yuklashda xatolik !");
        toast.error("Error:", err);
      }
    };

    fetchForecast();
  }, [city]);

  if (error) {
    toast.error(error);
  }

  return (
    <div className="flex flex-wrap min-h-screen w-full gap-6 transition-all">
      {weatherData ? (
        <Suspense fallback={<Loader />}>
          <div className="flex-shrink-0 phone:w-[350px] w-full">
            <TodayBlock
              temp={weatherData.celc}
              day={weatherData.day}
              time={weatherData.time}
              city={weatherData.city}
              img={weatherData.img}
            />
          </div>
          <div className="flex-grow">
            <TodayExtra
              temp={weatherData.temp}
              osadkov={weatherData.osadkov}
              wind={weatherData.wind}
              pressure={weatherData.pressure}
            />
          </div>
          <div className="w-full h-min flex p-3 phone:p-5 shadow-lg rounded-[20px]">
            <div className="flex overflow-x-auto rounded-[10px] gap-5 w-full">
              {forecastData.map((forecast, index) => (
                <DayBlocks
                  key={index}
                  day={forecast.day}
                  date={forecast.date}
                  img={forecast.img}
                  temp={forecast.temp}
                  tempNight={forecast.tempNight}
                  weatherStatus={forecast.weatherStatus}
                />
              ))}
            </div>
          </div>
        </Suspense>
      ) : (
        <Loader />
      )}
      <ToastContainer autoClose={1000} pauseOnHover:false />
    </div>
  );
};

export default Home;
