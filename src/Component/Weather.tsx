// import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import '../Component/Weather.css';

interface WeatherData {
    name: string;
    sys: {
        country: string;
    };
    main: {
        temp: number;
    };
    weather: Array<{
        icon: string;
        description: string;
    }>;
    wind: {
        speed: number;
    };
}

interface WeatherState {
    loading: boolean;
    data: WeatherData | null; // Data can be null initially
    error: boolean;
}

const Weather: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [weather, setWeather] = useState<WeatherState>({
        loading: false,
        data: null, // Initialize with null
        error: false,
    });

    const toDateFunction = (): string => {
        const months = [
            'January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December',
        ];
        const WeekDays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 'Saturday',
        ];
        const currentDate = new Date();
        const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
        return date;
    };

    const search = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            setWeather({ ...weather, loading: true });
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
            try {
                const res = await axios.get(url, {
                    params: {
                        q: input,
                        units: 'metric',
                        appid: api_key,
                    },
                });
                setWeather({ data: res.data, loading: false, error: false });
            } catch (error) {
                setWeather({ ...weather, data: null, error: true });
                setInput('');
                console.error('error', error);
            }
        }
    };

    return (
        <div className="App">
            <h1 className="app-name">My Weather App</h1>
            <div className="search-bar">
                <input
                    type="text"
                    className="city-search"
                    placeholder="Enter City Name.."
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyPress={search}
                />
            </div>
            {weather.loading && (
                <>
                    <br />
                    <br />
                    {/* <Oval type="Oval" color="black" height={100} width={100} /> */}
                </>
            )}
            {weather.error && (
                <>
                    <br />
                    <br />
                    <span className="error-message">
                        <FontAwesomeIcon icon={faFrown} />
                        <span style={{ fontSize: '20px' }}>City not found</span>
                    </span>
                </>
            )}
            {weather.data && (
                <div>
                    <div className="city-name">
                        <h2>
                            {weather.data.name}, <span>{weather.data.sys.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{toDateFunction()}</span>
                    </div>
                    <div className="icon-temp">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                            alt={weather.data.weather[0].description}
                        />
                        {Math.round(weather.data.main.temp)}
                        <sup className="deg">°C</sup>
                    </div>
                    <div className="des-wind">
                        <p>{weather.data.weather[0].description.toUpperCase()}</p>
                        <p>Wind Speed: {weather.data.wind.speed}m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
