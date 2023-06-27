'use client';

import { Divider, Typography } from 'antd';
import format from 'date-fns/format';
import Image from 'next/image';
import { getWeatherConditionDescription, getWeatherConditionImage } from '../../util';
import { useWeatherStore } from '../../weather-store';
import { Loader } from './Loader';
import styles from './current-weather.module.scss';

const { Text, Title, Paragraph } = Typography;

export const CurrentWeather = () => {
    const currentWeather = useWeatherStore(state => state.currentWeather);
    const temperatureSymbol = useWeatherStore(state => state.temperatureSymbol);
    const windSpeedUnit = useWeatherStore(state => state.windSpeedUnit);

    if (!currentWeather) {
        return <Loader />;
    }

    const { temperature, windSpeed, weatherCode, isDay } = currentWeather;
    const displayDate = format(new Date(), 'EEEE, H:mm');
    const weatherStatusImageUrl = getWeatherConditionImage(weatherCode, 'large', isDay);
    const weatherStatusDescription = getWeatherConditionDescription(weatherCode, isDay);

    return (
        <div className={styles.container}>
            <Title level={4}>Current weather</Title>
            <Image
                className={styles.weatherConditionImage}
                src={weatherStatusImageUrl}
                alt={weatherStatusDescription}
                title={weatherStatusDescription}
                width={256}
                height={256}
                unoptimized
            />
            <Text className={styles.temperature}>
                <span className={styles.number}>{temperature}</span>
                <span className={styles.symbol}>{temperatureSymbol}</span>
            </Text>
            <Title className={styles.date} level={5}>
                {displayDate}
            </Title>
            <Paragraph className={styles.description}>{weatherStatusDescription}</Paragraph>

            <Divider />
            <div className={styles.weatherDataContainer}>
                <Image
                    className={styles.icon}
                    src="/image/weather/windsock.svg"
                    alt={weatherStatusDescription}
                    title={weatherStatusDescription}
                    width={48}
                    height={48}
                />
                <Text className={styles.data}>Wind speed: {windSpeed + windSpeedUnit}</Text>
            </div>
        </div>
    );
};
