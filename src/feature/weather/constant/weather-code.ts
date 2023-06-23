import { OpenMeteoWeatherCode as WeatherCode, WeatherIcon } from '../type';

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
                day: 'Cloudy',
                night: 'Cloudy',
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

const WEATHER_CODE_TO_WEATHER_ICON_CODE = new Map<WeatherCode, string>([
    [WeatherCode.CLEAR_SKY, '01'],
    [WeatherCode.MAINLY_CLEAR, '01'],
    [WeatherCode.PARTLY_CLOUDY, '02'],
    [WeatherCode.OVERCAST, '03'],
    [WeatherCode.FOG, '50'],
    [WeatherCode.RIME_FOG, '50'],
    [WeatherCode.LIGHT_DRIZZLE, '09'],
    [WeatherCode.DRIZZLE, '09'],
    [WeatherCode.HEAVY_DRIZZLE, '09'],
    [WeatherCode.LIGHT_FREEZING_DRIZZLE, '09'],
    [WeatherCode.FREEZING_DRIZZLE, '09'],
    [WeatherCode.LIGHT_RAIN, '10'],
    [WeatherCode.RAIN, '10'],
    [WeatherCode.HEAVY_RAIN, '10'],
    [WeatherCode.LIGHT_FREEZING_RAIN, '10'],
    [WeatherCode.FREEZING_RAIN, '10'],
    [WeatherCode.LIGHT_SNOW, '13'],
    [WeatherCode.SNOW, '13'],
    [WeatherCode.HEAVY_SNOW, '13'],
    [WeatherCode.SNOW_GRAINS, '13'],
    [WeatherCode.LIGHT_SHOWERS, '09'],
    [WeatherCode.SHOWERS, '09'],
    [WeatherCode.HEAVY_SHOWERS, '09'],
    [WeatherCode.LIGHT_SNOW_SHOWERS, '13'],
    [WeatherCode.SNOW_SHOWERS, '13'],
    [WeatherCode.THUNDERSTORM, '11'],
    [WeatherCode.THUNDERSTORM_WITH_HAIL, '11'],
    [WeatherCode.THUNDERSTORM_WITH_HEAVY_HAIL, '11'],
]);

const WEATHER_CODE_TO_DAY_WEATHER_ICON_DESSCRIPTION = new Map<WeatherCode, string>([
    [WeatherCode.CLEAR_SKY, 'Sunny'],
    [WeatherCode.MAINLY_CLEAR, 'Mainly Sunny'],
    [WeatherCode.PARTLY_CLOUDY, 'Partly Cloudy'],
    [WeatherCode.OVERCAST, 'Cloudy'],
    [WeatherCode.FOG, 'Foggy'],
    [WeatherCode.RIME_FOG, 'Rime Fog'],
    [WeatherCode.LIGHT_DRIZZLE, 'Light Drizzle'],
    [WeatherCode.DRIZZLE, 'Drizzle'],
    [WeatherCode.HEAVY_DRIZZLE, 'Heavy Drizzle'],
    [WeatherCode.LIGHT_FREEZING_DRIZZLE, 'Light Freezing Drizzle'],
    [WeatherCode.FREEZING_DRIZZLE, 'Freezing Drizzle'],
    [WeatherCode.LIGHT_RAIN, 'Light Rain'],
    [WeatherCode.RAIN, 'Rain'],
    [WeatherCode.HEAVY_RAIN, 'Heavy Rain'],
    [WeatherCode.LIGHT_FREEZING_RAIN, 'Light Freezing Rain'],
    [WeatherCode.FREEZING_RAIN, 'Freezing Rain'],
    [WeatherCode.LIGHT_SNOW, 'Light Snow'],
    [WeatherCode.SNOW, 'Snow'],
    [WeatherCode.HEAVY_SNOW, 'Heavy Snow'],
    [WeatherCode.SNOW_GRAINS, 'Snow Grains'],
    [WeatherCode.LIGHT_SHOWERS, 'Light Showers'],
    [WeatherCode.SHOWERS, 'Showers'],
    [WeatherCode.HEAVY_SHOWERS, 'Heavy Showers'],
    [WeatherCode.LIGHT_SNOW_SHOWERS, 'Light Snow Showers'],
    [WeatherCode.SNOW_SHOWERS, 'Snow Showers'],
    [WeatherCode.THUNDERSTORM, 'Thunderstorm'],
    [WeatherCode.THUNDERSTORM_WITH_HAIL, 'Thunderstorm With Hail'],
    [WeatherCode.THUNDERSTORM_WITH_HEAVY_HAIL, 'Thunderstorm With Heavy Hail'],
]);

const WEATHER_CODE_TO_NIGHT_WEATHER_ICON_DESSCRIPTION = new Map<WeatherCode, string>([
    [WeatherCode.CLEAR_SKY, 'Clear'],
    [WeatherCode.MAINLY_CLEAR, 'Mainly Clear'],
    [WeatherCode.PARTLY_CLOUDY, 'Partly Cloudy'],
    [WeatherCode.OVERCAST, 'Cloudy'],
    [WeatherCode.FOG, 'Foggy'],
    [WeatherCode.RIME_FOG, 'Rime Fog'],
    [WeatherCode.LIGHT_DRIZZLE, 'Light Drizzle'],
    [WeatherCode.DRIZZLE, 'Drizzle'],
    [WeatherCode.HEAVY_DRIZZLE, 'Heavy Drizzle'],
    [WeatherCode.LIGHT_FREEZING_DRIZZLE, 'Light Freezing Drizzle'],
    [WeatherCode.FREEZING_DRIZZLE, 'Freezing Drizzle'],
    [WeatherCode.LIGHT_RAIN, 'Light Rain'],
    [WeatherCode.RAIN, 'Rain'],
    [WeatherCode.HEAVY_RAIN, 'Heavy Rain'],
    [WeatherCode.LIGHT_FREEZING_RAIN, 'Light Freezing Rain'],
    [WeatherCode.FREEZING_RAIN, 'Freezing Rain'],
    [WeatherCode.LIGHT_SNOW, 'Light Snow'],
    [WeatherCode.SNOW, 'Snow'],
    [WeatherCode.HEAVY_SNOW, 'Heavy Snow'],
    [WeatherCode.SNOW_GRAINS, 'Snow Grains'],
    [WeatherCode.LIGHT_SHOWERS, 'Light Showers'],
    [WeatherCode.SHOWERS, 'Showers'],
    [WeatherCode.HEAVY_SHOWERS, 'Heavy Showers'],
    [WeatherCode.LIGHT_SNOW_SHOWERS, 'Light Snow Showers'],
    [WeatherCode.SNOW_SHOWERS, 'Snow Showers'],
    [WeatherCode.THUNDERSTORM, 'Thunderstorm'],
    [WeatherCode.THUNDERSTORM_WITH_HAIL, 'Thunderstorm With Hail'],
    [WeatherCode.THUNDERSTORM_WITH_HEAVY_HAIL, 'Thunderstorm With Heavy Hail'],
]);

export {
    WEATHER_CODE_TO_DAY_WEATHER_ICON_DESSCRIPTION,
    WEATHER_CODE_TO_NIGHT_WEATHER_ICON_DESSCRIPTION,
    WEATHER_CODE_TO_WEATHER_ICON,
    WEATHER_CODE_TO_WEATHER_ICON_CODE,
};
