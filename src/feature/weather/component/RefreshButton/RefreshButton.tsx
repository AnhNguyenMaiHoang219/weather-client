'use client';

import { useWeatherStore } from '@/feature/weather/weather-store';
import { SyncOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Tooltip } from 'antd';
import { useEffect } from 'react';

export const RefreshButton = ({ className, ...props }: ButtonProps) => {
    const fetchWeatherData = useWeatherStore(state => state.fetchWeatherData);
    const isLoadingWeatherData = useWeatherStore(state => state.loading);

    function handleRefreshData() {
        fetchWeatherData();
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <Tooltip placement="bottom" title="Refresh weather data">
            <Button
                className={className}
                size="large"
                icon={<SyncOutlined />}
                loading={isLoadingWeatherData}
                disabled={isLoadingWeatherData}
                onClick={handleRefreshData}
                {...props}
            />
        </Tooltip>
    );
};
