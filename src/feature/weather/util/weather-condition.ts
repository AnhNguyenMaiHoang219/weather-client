import { WEATHER_CODE_TO_WEATHER_ICON } from '../constant/weather-code';
import { OpenMeteoWeatherCode as WeatherCode } from '../type';

function getWeatherConditionImage(code: WeatherCode, size: 'small' | 'large', isDay = true) {
    const weatherIconObject = WEATHER_CODE_TO_WEATHER_ICON.get(code);

    if (!weatherIconObject) {
        return '';
    }

    const iconSize = size == 'small' ? '@2x' : '@4x';
    const iconCode = `${weatherIconObject.code}${isDay ? 'd' : 'n'}`;
    const iconPath = `${iconCode}${iconSize}.png`;

    return `https://openweathermap.org/img/wn/${iconPath}`;
}

function getWeatherConditionDescription(code: WeatherCode, isDay = true) {
    const weatherIconObject = WEATHER_CODE_TO_WEATHER_ICON.get(code);

    if (!weatherIconObject) {
        return 'Unknown description';
    }

    return isDay ? weatherIconObject.description.day : weatherIconObject.description.night;
}

export { getWeatherConditionDescription, getWeatherConditionImage };
