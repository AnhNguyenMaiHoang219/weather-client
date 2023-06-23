'use client';

import { Button } from 'antd';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useWeatherStore } from '../../store';

const Line = dynamic(() => import('@ant-design/charts').then(mod => mod.Line), {
    ssr: false,
});

export const HourlyChart = () => {
    const hourlyData = useWeatherStore(state => state.hourlyData);
    const fetchWeeklyTemperature = useWeatherStore(state => state.fetchHourlyTemperature);

    useEffect(() => {
        // await fetchWeeklyTemperature();
    });

    function onClick() {
        fetchWeeklyTemperature();
    }

    const config = {
        data: hourlyData,
        height: 300,
        xField: 'time',
        yField: 'temperature',
        smooth: true,
    };

    return (
        <>
            <Button onClick={onClick}>Fetch data</Button>
            <Line {...config} />
        </>
    );
};
