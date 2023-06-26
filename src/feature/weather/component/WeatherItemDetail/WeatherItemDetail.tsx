'use client';

// Workaround solution for client-side import of Area chart component
import dynamic from 'next/dynamic';
const Area = dynamic(() => import('@ant-design/charts').then(mod => mod.Area), {
    ssr: false,
});

import { AreaConfig } from '@ant-design/charts';
import { Col, Image, Modal, Row, Statistic, Typography } from 'antd';
import format from 'date-fns/format';
import { shallow } from 'zustand/shallow';
import { DEFAULT_CHART_CONFIG } from '../../constant';
import { getWeatherConditionDescription, getWeatherConditionImage, toHour } from '../../util';
import { useWeatherStore } from '../../weather-store';
import styles from './weather-item-detail.module.scss';

const { Title } = Typography;

interface Props {
    shown: boolean;
    setIsShown: (shown: boolean) => void;
    date: string;
    weatherCode: number;
    minTemperature: number;
    maxTemperature: number;
    maxUvIndex: number;
    maxWindSpeed: number;
}

export const WeatherItemDetail = ({
    shown,
    setIsShown,
    date,
    weatherCode,
    minTemperature,
    maxTemperature,
    maxUvIndex,
    maxWindSpeed,
}: Props) => {
    const hourlyData = useWeatherStore(state =>
        state.hourlyData.filter(record => record.time.includes(date)),
    );

    const { temperatureSymbol, windSpeedUnit } = useWeatherStore(
        state => ({
            temperatureSymbol: state.temperatureSymbol,
            windSpeedUnit: state.windSpeedUnit,
        }),
        shallow,
    );

    const displayDate = format(new Date(date), 'EEE, MMM dd');
    const weatherStatusImageUrl = getWeatherConditionImage(weatherCode, 'large');
    const weatherStatusDescription = getWeatherConditionDescription(weatherCode);

    const config: AreaConfig = {
        ...DEFAULT_CHART_CONFIG,
        data: hourlyData,
        xField: 'time',
        yField: 'temperature',
        xAxis: {
            tickCount: 24,
            label: {
                formatter: time => toHour(time),
            },
        },
        yAxis: {
            label: {
                formatter: temperature => temperature + temperatureSymbol,
            },
        },
        tooltip: {
            title: (_, datum) => toHour(datum.time),
            formatter: datum => ({
                name: 'temperature',
                value: datum.temperature + temperatureSymbol,
            }),
        },
    };

    return (
        <Modal
            title={displayDate}
            centered
            open={shown}
            cancelButtonProps={{ hidden: true }}
            okButtonProps={{ hidden: true }}
            onCancel={() => setIsShown(false)}
            width={700}
        >
            <Row gutter={[12, 12]}>
                <Col span={24}>
                    <Row justify="center">
                        <Image width={150} src={weatherStatusImageUrl} />
                    </Row>
                    <Row justify="center">
                        <Title level={4}>{weatherStatusDescription}</Title>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row justify="center" gutter={[12, 12]}>
                        <Col span={10}>
                            <Row justify="center">
                                <Statistic
                                    title="Max temperature"
                                    value={`${maxTemperature} ${temperatureSymbol}`}
                                />
                            </Row>
                        </Col>
                        <Col span={10}>
                            <Row justify="center">
                                <Statistic
                                    title="Min temperature"
                                    value={`${minTemperature} ${temperatureSymbol}`}
                                />
                            </Row>
                        </Col>
                        <Col span={10}>
                            <Row justify="center">
                                <Statistic
                                    title="Wind speed"
                                    value={`${maxWindSpeed} ${windSpeedUnit}`}
                                />
                            </Row>
                        </Col>
                        <Col span={10}>
                            <Row justify="center">
                                <Statistic title="UV index" value={maxUvIndex} />
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className={styles.chartContainer} span={24}>
                    <Area {...config} />
                </Col>
            </Row>
        </Modal>
    );
};
