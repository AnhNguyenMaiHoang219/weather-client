'use client';

import { Typography } from 'antd';
import { useWeatherStore } from '../../weather-store';
import { WeatherItem } from '../WeatherItem';
import styles from './weekly-table.module.scss';

const { Title } = Typography;

export const WeeklyTable = () => {
    const weatherDailyData = useWeatherStore(state => state.dailyData);

    return (
        <>
            <Title level={4}>Weekly highlight</Title>
            <div className={styles.container}>
                {weatherDailyData.map(
                    ({
                        time,
                        weatherCode,
                        maxTemperature,
                        minTemperature,
                        maxUvIndex,
                        maxWindSpeed,
                    }) => (
                        <WeatherItem
                            key={time + weatherCode}
                            date={time}
                            weatherCode={weatherCode}
                            maxTemperature={maxTemperature}
                            minTemperature={minTemperature}
                            maxUvIndex={maxUvIndex}
                            maxWindSpeed={maxWindSpeed}
                        />
                    ),
                )}
            </div>
        </>
    );
};
