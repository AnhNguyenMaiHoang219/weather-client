export interface ForecastResponse {
    latitude: string;
    longitude: string;
    hourly: {
        time: string[];
        temperature_2m: number[];
    };
    daily: {
        time: string[];
        weathercode: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    };
}
