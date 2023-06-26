'use client';

// Workaround solution for client-side import of Area chart component
import dynamic from 'next/dynamic';
const Area = dynamic(() => import('@ant-design/charts').then(mod => mod.Area), {
    ssr: false,
});

import { AreaConfig } from '@ant-design/charts';
import { Typography } from 'antd';
import { DEFAULT_CHART_CONFIG } from '../../constant/chart';
import { toDateWithHour } from '../../util';
import { useWeatherStore } from '../../weather-store';
import styles from './hourly-chart.module.scss';

const { Title } = Typography;

export const HourlyChart = () => {
    const hourlyData = useWeatherStore(state => state.hourlyData);
    const temperatureSymbol = useWeatherStore(state => state.temperatureSymbol);

    const config: AreaConfig = {
        ...DEFAULT_CHART_CONFIG,
        data: hourlyData,
        xField: 'time',
        yField: 'temperature',
        xAxis: {
            range: [0, 1],
            tickCount: 8,
            label: {
                formatter: time => toDateWithHour(time),
            },
        },
        yAxis: {
            label: {
                formatter: temperature => temperature + temperatureSymbol,
            },
        },
        tooltip: {
            title: (_, datum) => toDateWithHour(datum.time),
            formatter: datum => ({
                name: 'temperature',
                value: datum.temperature + temperatureSymbol,
            }),
        },
    };

    function renderChart() {
        if (!hourlyData.length) {
            return;
        }

        return <Area className={styles.chart} {...config} />;
    }

    return (
        <>
            <Title level={4}>Hourly chart</Title>
            {renderChart()}
        </>
    );
};
