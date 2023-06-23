'use client';

import { useWeatherStore } from '../../store';
import { WeatherItem } from '../WeatherItem';
import styles from './weekly-table.module.scss';

export const WeeklyTable = () => {
    const weatherDailyData = useWeatherStore(state => state.dailyData);
    const tempUnit = useWeatherStore(state => state.tempUnit);

    return (
        <div className={styles.container}>
            {weatherDailyData.map(({ time, weatherCode, maxTemperature, minTemperature }) => (
                <WeatherItem
                    key={time}
                    time={time}
                    weatherStatusCode={weatherCode}
                    temperatureUnit={tempUnit}
                    maxTemperature={maxTemperature}
                    minTemperature={minTemperature}
                />
            ))}
        </div>
    );
};
