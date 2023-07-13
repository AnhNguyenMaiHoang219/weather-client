import { CurrentWeatherResponse, TemperatureUnit, WindSpeedQuery } from '@/config/open-meteo/type';
import { WIND_SPEED_QUERY_TO_WIND_SPEED_UNIT } from '../constant';
import { CurrentWeather, DailyRecord, HourlyRecord } from '../type';

function buildCurrentWeatherData({
    time,
    temperature,
    windspeed,
    winddirection,
    weathercode,
    is_day,
}: CurrentWeatherResponse): CurrentWeather {
    return {
        time,
        temperature,
        windSpeed: windspeed,
        windDirection: winddirection,
        weatherCode: weathercode,
        isDay: !!is_day,
    };
}

function buildHourlyTempList(times: string[], temperatures: number[]): HourlyRecord[] {
    if (times.length !== temperatures.length) {
        console.error('Could not build hourly weather data because of the input data mismatch');
        return [];
    }

    return times.map((time, index) => ({
        time: time,
        temperature: temperatures[index],
    }));
}

function buildDailyDataList(
    times: string[],
    weatherCodes: number[],
    maxTemperatures: number[],
    minTemperatures: number[],
    maxUvIndexs: number[],
    maxWindSpeeds: number[],
): DailyRecord[] {
    if (
        times.length !== weatherCodes.length ||
        times.length !== maxTemperatures.length ||
        times.length !== minTemperatures.length ||
        times.length !== maxUvIndexs.length ||
        times.length !== maxWindSpeeds.length
    ) {
        console.error('Could not build daily weather data because of the input data mismatch');
        return [];
    }

    return times.map((time, index) => ({
        time: time,
        weatherCode: weatherCodes[index],
        maxTemperature: maxTemperatures[index],
        minTemperature: minTemperatures[index],
        maxUvIndex: maxUvIndexs[index],
        maxWindSpeed: maxWindSpeeds[index],
    }));
}

function toTemperatureSymbol(temperatureUnit: TemperatureUnit): string {
    return temperatureUnit === 'celsius' ? '\u00b0C' : '\u00b0F';
}

function toWindSpeedUnit(windSpeedQuery: WindSpeedQuery): string {
    return WIND_SPEED_QUERY_TO_WIND_SPEED_UNIT.get(windSpeedQuery) || windSpeedQuery;
}

export {
    buildCurrentWeatherData,
    buildDailyDataList,
    buildHourlyTempList,
    toTemperatureSymbol,
    toWindSpeedUnit,
};
