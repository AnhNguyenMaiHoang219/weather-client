import { OpenMeteoWeatherCode as WeatherCode, WeatherIcon, WeatherMeteocons } from '../type';

const WEATHER_CODE_TO_METEOCONS = new Map<WeatherCode, WeatherMeteocons>([
    [
        WeatherCode.CLEAR_SKY,
        {
            image: 'clear',
            description: {
                day: 'Sunny',
                night: 'Clear',
            },
        },
    ],
    [
        WeatherCode.MAINLY_CLEAR,
        {
            image: 'clear',
            description: {
                day: 'Mainly Sunny',
                night: 'Mainly Clear',
            },
        },
    ],
    [
        WeatherCode.PARTLY_CLOUDY,
        {
            image: 'partly-cloudy',
            description: {
                day: 'Partly Cloudy',
                night: 'Partly Cloudy',
            },
        },
    ],
    [
        WeatherCode.OVERCAST,
        {
            image: 'overcast',
            description: {
                day: 'Overcast',
                night: 'Overcast',
            },
        },
    ],
    [
        WeatherCode.FOG,
        {
            image: 'fog',
            description: {
                day: 'Foggy',
                night: 'Foggy',
            },
        },
    ],
    [
        WeatherCode.RIME_FOG,
        {
            image: 'fog-rime',
            description: {
                day: 'Rime Fog',
                night: 'Rime Fog',
            },
        },
    ],
    [
        WeatherCode.LIGHT_DRIZZLE,
        {
            image: 'drizzle-light',
            description: {
                day: 'Light Drizzle',
                night: 'Light Drizzle',
            },
        },
    ],
    [
        WeatherCode.DRIZZLE,
        {
            image: 'drizzle',
            description: {
                day: 'Drizzle',
                night: 'Drizzle',
            },
        },
    ],
    [
        WeatherCode.HEAVY_DRIZZLE,
        {
            image: 'drizzle-heavy',
            description: {
                day: 'Heavy Drizzle',
                night: 'Heavy Drizzle',
            },
        },
    ],
    [
        WeatherCode.LIGHT_FREEZING_DRIZZLE,
        {
            image: 'sleet-light',
            description: {
                day: 'Light Freezing Drizzle',
                night: 'Light Freezing Drizzle',
            },
        },
    ],
    [
        WeatherCode.FREEZING_DRIZZLE,
        {
            image: 'sleet',
            description: {
                day: 'Freezing Drizzle',
                night: 'Freezing Drizzle',
            },
        },
    ],
    [
        WeatherCode.LIGHT_RAIN,
        {
            image: 'rain-light',
            description: {
                day: 'Light Rain',
                night: 'Light Rain',
            },
        },
    ],
    [
        WeatherCode.RAIN,
        {
            image: 'rain',
            description: {
                day: 'Rain',
                night: 'Rain',
            },
        },
    ],
    [
        WeatherCode.HEAVY_RAIN,
        {
            image: 'rain-heavy',
            description: {
                day: 'Heavy Rain',
                night: 'Heavy Rain',
            },
        },
    ],
    [
        WeatherCode.LIGHT_FREEZING_RAIN,
        {
            image: 'sleet-light',
            description: {
                day: 'Light Freezing Rain',
                night: 'Light Freezing Rain',
            },
        },
    ],
    [
        WeatherCode.FREEZING_RAIN,
        {
            image: 'sleet',
            description: {
                day: 'Freezing Rain',
                night: 'Freezing Rain',
            },
        },
    ],
    [
        WeatherCode.LIGHT_SNOW,
        {
            image: 'snow-light',
            description: {
                day: 'Light Snow',
                night: 'Light Snow',
            },
        },
    ],
    [
        WeatherCode.SNOW,
        {
            image: 'snow',
            description: {
                day: 'Snow',
                night: 'Snow',
            },
        },
    ],
    [
        WeatherCode.HEAVY_SNOW,
        {
            image: 'snow-heavy',
            description: {
                day: 'Heavy Snow',
                night: 'Heavy Snow',
            },
        },
    ],
    [
        WeatherCode.SNOW_GRAINS,
        {
            image: 'snow-heavy',
            description: {
                day: 'Snow Grains',
                night: 'Snow Grains',
            },
        },
    ],
    [
        WeatherCode.LIGHT_SHOWERS,
        {
            image: 'rain-light',
            description: {
                day: 'Light Showers',
                night: 'Light Showers',
            },
        },
    ],
    [
        WeatherCode.SHOWERS,
        {
            image: 'rain',
            description: {
                day: 'Showers',
                night: 'Showers',
            },
        },
    ],
    [
        WeatherCode.HEAVY_SHOWERS,
        {
            image: 'rain-heavy',
            description: {
                day: 'Heavy Showers',
                night: 'Heavy Showers',
            },
        },
    ],
    [
        WeatherCode.LIGHT_SNOW_SHOWERS,
        {
            image: 'sleet-light',
            description: {
                day: 'Light Snow Showers',
                night: 'Light Snow Showers',
            },
        },
    ],
    [
        WeatherCode.SNOW_SHOWERS,
        {
            image: 'sleet',
            description: {
                day: 'Snow Showers',
                night: 'Snow Showers',
            },
        },
    ],
    [
        WeatherCode.THUNDERSTORM,
        {
            image: 'thunderstorms',
            description: {
                day: 'Thunderstorm',
                night: 'Thunderstorm',
            },
        },
    ],
    [
        WeatherCode.THUNDERSTORM_WITH_HAIL,
        {
            image: 'thunderstorms-rain',
            description: {
                day: 'Thunderstorm With Hail',
                night: 'Thunderstorm With Hail',
            },
        },
    ],
    [
        WeatherCode.THUNDERSTORM_WITH_HEAVY_HAIL,
        {
            image: 'thunderstorms-rain-heavy',
            description: {
                day: 'Thunderstorm With Heavy Hail',
                night: 'Thunderstorm With Heavy Hail',
            },
        },
    ],
]);

const WEATHER_CODE_TO_WEATHER_ICON = new Map<WeatherCode, WeatherIcon>([
    [
        WeatherCode.CLEAR_SKY,
        {
            code: '01',
            description: {
                day: 'Sunny',
                night: 'Clear',
            },
        },
    ],
    [
        WeatherCode.MAINLY_CLEAR,
        {
            code: '01',
            description: {
                day: 'Mainly Sunny',
                night: 'Mainly Clear',
            },
        },
    ],
    [
        WeatherCode.PARTLY_CLOUDY,
        {
            code: '02',
            description: {
                day: 'Partly Cloudy',
                night: 'Partly Cloudy',
            },
        },
    ],
    [
        WeatherCode.OVERCAST,
        {
            code: '03',
            description: {
                day: 'Overcast',
                night: 'Overcast',
            },
        },
    ],
    [
        WeatherCode.FOG,
        {
            code: '50',
            description: {
                day: 'Foggy',
                night: 'Foggy',
            },
        },
    ],
    [
        WeatherCode.RIME_FOG,
        {
            code: '50',
            description: {
                day: 'Rime Fog',
                night: 'Rime Fog',
            },
        },
    ],
    [
        WeatherCode.LIGHT_DRIZZLE,
        {
            code: '09',
            description: {
                day: 'Light Drizzle',
                night: 'Light Drizzle',
            },
        },
    ],
    [
        WeatherCode.DRIZZLE,
        {
            code: '09',
            description: {
                day: 'Drizzle',
                night: 'Drizzle',
            },
        },
    ],
    [
        WeatherCode.HEAVY_DRIZZLE,
        {
            code: '09',
            description: {
                day: 'Heavy Drizzle',
                night: 'Heavy Drizzle',
            },
        },
    ],
    [
        WeatherCode.LIGHT_FREEZING_DRIZZLE,
        {
            code: '09',
            description: {
                day: 'Light Freezing Drizzle',
                night: 'Light Freezing Drizzle',
            },
        },
    ],
    [
        WeatherCode.FREEZING_DRIZZLE,
        {
            code: '09',
            description: {
                day: 'Freezing Drizzle',
                night: 'Freezing Drizzle',
            },
        },
    ],
    [
        WeatherCode.LIGHT_RAIN,
        {
            code: '10',
            description: {
                day: 'Light Rain',
                night: 'Light Rain',
            },
        },
    ],
    [
        WeatherCode.RAIN,
        {
            code: '10',
            description: {
                day: 'Rain',
                night: 'Rain',
            },
        },
    ],
    [
        WeatherCode.HEAVY_RAIN,
        {
            code: '10',
            description: {
                day: 'Heavy Rain',
                night: 'Heavy Rain',
            },
        },
    ],
    [
        WeatherCode.LIGHT_FREEZING_RAIN,
        {
            code: '10',
            description: {
                day: 'Light Freezing Rain',
                night: 'Light Freezing Rain',
            },
        },
    ],
    [
        WeatherCode.FREEZING_RAIN,
        {
            code: '10',
            description: {
                day: 'Freezing Rain',
                night: 'Freezing Rain',
            },
        },
    ],
    [
        WeatherCode.LIGHT_SNOW,
        {
            code: '13',
            description: {
                day: 'Light Snow',
                night: 'Light Snow',
            },
        },
    ],
    [
        WeatherCode.SNOW,
        {
            code: '13',
            description: {
                day: 'Snow',
                night: 'Snow',
            },
        },
    ],
    [
        WeatherCode.HEAVY_SNOW,
        {
            code: '13',
            description: {
                day: 'Heavy Snow',
                night: 'Heavy Snow',
            },
        },
    ],
    [
        WeatherCode.SNOW_GRAINS,
        {
            code: '13',
            description: {
                day: 'Snow Grains',
                night: 'Snow Grains',
            },
        },
    ],
    [
        WeatherCode.LIGHT_SHOWERS,
        {
            code: '09',
            description: {
                day: 'Light Showers',
                night: 'Light Showers',
            },
        },
    ],
    [
        WeatherCode.SHOWERS,
        {
            code: '09',
            description: {
                day: 'Showers',
                night: 'Showers',
            },
        },
    ],
    [
        WeatherCode.HEAVY_SHOWERS,
        {
            code: '09',
            description: {
                day: 'Heavy Showers',
                night: 'Heavy Showers',
            },
        },
    ],
    [
        WeatherCode.LIGHT_SNOW_SHOWERS,
        {
            code: '13',
            description: {
                day: 'Light Snow Showers',
                night: 'Light Snow Showers',
            },
        },
    ],
    [
        WeatherCode.SNOW_SHOWERS,
        {
            code: '13',
            description: {
                day: 'Snow Showers',
                night: 'Snow Showers',
            },
        },
    ],
    [
        WeatherCode.THUNDERSTORM,
        {
            code: '11',
            description: {
                day: 'Thunderstorm',
                night: 'Thunderstorm',
            },
        },
    ],
    [
        WeatherCode.THUNDERSTORM_WITH_HAIL,
        {
            code: '11',
            description: {
                day: 'Thunderstorm With Hail',
                night: 'Thunderstorm With Hail',
            },
        },
    ],
    [
        WeatherCode.THUNDERSTORM_WITH_HEAVY_HAIL,
        {
            code: '11',
            description: {
                day: 'Thunderstorm With Heavy Hail',
                night: 'Thunderstorm With Heavy Hail',
            },
        },
    ],
]);

export { WEATHER_CODE_TO_METEOCONS, WEATHER_CODE_TO_WEATHER_ICON };
