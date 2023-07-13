interface CurrentWeatherResponse {
    time: string;
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: 0 | 1;
}

interface ForecastResponse {
    latitude: number;
    longitude: number;
    current_weather: CurrentWeatherResponse;
    hourly: {
        time: string[];
        temperature_2m: number[];
    };
    daily: {
        time: string[];
        weathercode: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        uv_index_max: number[];
        windspeed_10m_max: number[];
    };
}

type TemperatureUnit = 'celsius' | 'fahrenheit';
type WindSpeedQuery = 'kmh' | 'ms' | 'mph' | 'kn';

export type { CurrentWeatherResponse, ForecastResponse, TemperatureUnit, WindSpeedQuery };
