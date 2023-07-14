'use client';

import { Typography } from 'antd';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import Image from 'next/image';
import { useState } from 'react';
import { getWeatherConditionDescription, getWeatherConditionMeteoIcon } from '../../util';
import { useWeatherStore } from '../../weather-store';
import { WeatherItemDetail } from '../WeatherItemDetail';
import styles from './weather-item.module.scss';

const { Paragraph } = Typography;

interface Props {
    date: string;
    weatherCode: number;
    minTemperature: number;
    maxTemperature: number;
    maxUvIndex: number;
    maxWindSpeed: number;
}

export const WeatherItem = ({
    date: dateProp,
    weatherCode,
    minTemperature,
    maxTemperature,
    maxUvIndex,
    maxWindSpeed,
}: Props) => {
    const [isDetailModalShown, setDetailModalShown] = useState(false);

    const date = new Date(dateProp);
    const today = isToday(date);
    const displayDate = format(date, 'EEE, MMM dd');
    const weatherStatusImageUrl = getWeatherConditionMeteoIcon(weatherCode);
    const weatherStatusDescription = getWeatherConditionDescription(weatherCode);
    const temperatureSymbol = useWeatherStore(state => state.temperatureSymbol);

    function onClick() {
        setDetailModalShown(true);
    }

    return (
        <>
            <div className={`${styles.container} ${today ? styles.active : ''}`} onClick={onClick}>
                <div className={styles.frontContainer}>
                    <h6 className={styles.date}>{today ? 'Today' : displayDate}</h6>
                    <Image
                        className={styles.image}
                        src={weatherStatusImageUrl}
                        alt={weatherStatusDescription}
                        title={weatherStatusDescription}
                        width={96}
                        height={96}
                        unoptimized
                    />
                </div>
                <Paragraph className={styles.description}>{weatherStatusDescription}</Paragraph>
                <div className={styles.temperatureContainer}>
                    <Paragraph className={styles.temp}>
                        {maxTemperature + temperatureSymbol}
                    </Paragraph>
                    <Paragraph className={`${styles.temp} ${styles.min}`}>
                        {minTemperature + temperatureSymbol}
                    </Paragraph>
                </div>
            </div>

            <WeatherItemDetail
                shown={isDetailModalShown}
                setIsShown={setDetailModalShown}
                date={dateProp}
                weatherCode={weatherCode}
                maxTemperature={maxTemperature}
                minTemperature={minTemperature}
                maxUvIndex={maxUvIndex}
                maxWindSpeed={maxWindSpeed}
            />
        </>
    );
};
