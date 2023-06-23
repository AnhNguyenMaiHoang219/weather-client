'use client';

import { TempUnit } from '../../type';
import { getWeatherStatusDescription, getWeatherStatusImage, toTempSymbol } from '../../util';
import styles from './weather-item.module.scss';

interface Props {
    time: string;
    weatherStatusCode: number;
    minTemperature: number;
    maxTemperature: number;
    temperatureUnit: TempUnit;
}

export const WeatherItem = ({
    time,
    weatherStatusCode,
    temperatureUnit,
    minTemperature,
    maxTemperature,
}: Props) => {
    const weatherStatusDescription = getWeatherStatusDescription(weatherStatusCode);
    const symbol = toTempSymbol(temperatureUnit);

    function onClick() {}

    return (
        <div className={styles.container} onClick={onClick}>
            <h6 className={styles.date}>{time}</h6>
            <img
                className={styles.image}
                src={getWeatherStatusImage(weatherStatusCode, 'large')}
                alt={weatherStatusDescription}
                title={weatherStatusDescription}
            />
            <p className={styles.description}>{weatherStatusDescription}</p>
            <div className={styles.tempContainer}>
                <p className={styles.temp}>{maxTemperature + symbol}</p>
                <p className={`${styles.temp} ${styles.min}`}>{minTemperature + symbol}</p>
            </div>
        </div>
    );
};
