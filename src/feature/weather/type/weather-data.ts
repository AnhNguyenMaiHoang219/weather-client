interface CurrentWeather {
    time: string;
    temperature: number;
    windSpeed: number;
    windDirection: number;
    weatherCode: number;
    isDay: boolean;
}

interface DailyRecord {
    time: string;
    weatherCode: number;
    maxTemperature: number;
    minTemperature: number;
    maxUvIndex: number;
    maxWindSpeed: number;
}

interface HourlyRecord {
    time: string;
    temperature: number;
}

export type { CurrentWeather, DailyRecord, HourlyRecord };
