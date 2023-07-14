interface WeatherMeteocons {
    image: string;
    description: WeatherIconDescription;
}

interface WeatherIcon {
    code: string;
    description: WeatherIconDescription;
}

interface WeatherIconDescription {
    day: string;
    night: string;
}

export type { WeatherIcon, WeatherIconDescription, WeatherMeteocons };
