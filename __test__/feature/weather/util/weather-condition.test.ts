import { OpenMeteoWeatherCode as WeatherCode } from '@/feature/weather/type';
import { getWeatherConditionDescription, getWeatherConditionImage } from '@/feature/weather/util';

describe('Weather condition util', () => {
    describe('Test getWeatherConditionImage method', () => {
        it.each([
            [WeatherCode.CLEAR_SKY, true, 'https://openweathermap.org/img/wn/01d@2x.png'],
            [WeatherCode.CLEAR_SKY, false, 'https://openweathermap.org/img/wn/01n@2x.png'],
            [WeatherCode.MAINLY_CLEAR, true, 'https://openweathermap.org/img/wn/01d@2x.png'],
            [WeatherCode.MAINLY_CLEAR, false, 'https://openweathermap.org/img/wn/01n@2x.png'],
            [WeatherCode.PARTLY_CLOUDY, true, 'https://openweathermap.org/img/wn/02d@2x.png'],
            [WeatherCode.PARTLY_CLOUDY, false, 'https://openweathermap.org/img/wn/02n@2x.png'],
            [100, true, ''],
            [100, false, ''],
        ])(
            'Given weather code "%p" and isDay param is "%p", then expecting small (@2x.png) image url %p is returned',
            (weatherCode: WeatherCode, isDay, expectedResult: string) => {
                expect(getWeatherConditionImage(weatherCode, 'small', isDay)).toEqual(
                    expectedResult,
                );
            },
        );

        it.each([
            [WeatherCode.CLEAR_SKY, true, 'https://openweathermap.org/img/wn/01d@4x.png'],
            [WeatherCode.CLEAR_SKY, false, 'https://openweathermap.org/img/wn/01n@4x.png'],
            [WeatherCode.MAINLY_CLEAR, true, 'https://openweathermap.org/img/wn/01d@4x.png'],
            [WeatherCode.MAINLY_CLEAR, false, 'https://openweathermap.org/img/wn/01n@4x.png'],
            [WeatherCode.PARTLY_CLOUDY, true, 'https://openweathermap.org/img/wn/02d@4x.png'],
            [WeatherCode.PARTLY_CLOUDY, false, 'https://openweathermap.org/img/wn/02n@4x.png'],
            [100, true, ''],
            [100, false, ''],
        ])(
            'Given weather code "%p" and isDay param is "%p", then expecting large (@4x.png) image url %p is returned',
            (weatherCode: WeatherCode, isDay, expectedResult: string) => {
                expect(getWeatherConditionImage(weatherCode, 'large', isDay)).toEqual(
                    expectedResult,
                );
            },
        );
    });

    describe('Test getWeatherConditionDescription method', () => {
        it.each([
            [WeatherCode.CLEAR_SKY, true, 'Sunny'],
            [WeatherCode.CLEAR_SKY, false, 'Clear'],
            [WeatherCode.MAINLY_CLEAR, true, 'Mainly Sunny'],
            [WeatherCode.MAINLY_CLEAR, false, 'Mainly Clear'],
            [WeatherCode.PARTLY_CLOUDY, true, 'Partly Cloudy'],
            [WeatherCode.PARTLY_CLOUDY, false, 'Partly Cloudy'],
            [100, true, 'Unknown description'],
            [100, false, 'Unknown description'],
        ])(
            'Given weather code "%p" and isDay param is "%p", then expecting weather description %p is returned',
            (weatherCode: WeatherCode, isDay, expectedResult: string) => {
                expect(getWeatherConditionDescription(weatherCode, isDay)).toEqual(expectedResult);
            },
        );
    });
});
