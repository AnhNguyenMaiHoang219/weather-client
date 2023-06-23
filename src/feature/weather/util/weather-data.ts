import { DailyRecord, HourlyRecord, TempUnit } from '../type';

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

function buildDailyTempList(
    times: string[],
    weatherCodes: number[],
    maxTemperatures: number[],
    minTemperatures: number[],
): DailyRecord[] {
    if (
        times.length !== weatherCodes.length ||
        times.length !== weatherCodes.length ||
        times.length !== maxTemperatures.length ||
        times.length !== minTemperatures.length
    ) {
        console.error('Could not build daily weather data because of the input data mismatch');
        return [];
    }

    return times.map((time, index) => ({
        time: time,
        weatherCode: weatherCodes[index],
        maxTemperature: maxTemperatures[index],
        minTemperature: minTemperatures[index],
    }));
}

function toTempSymbol(tempUnit: TempUnit): string {
    return tempUnit == 'celsius' ? '\u00b0C' : '\u00b0F';
}

export { buildDailyTempList, buildHourlyTempList, toTempSymbol };
