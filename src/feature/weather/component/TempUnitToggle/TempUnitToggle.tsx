'use client';

import { toTemperatureSymbol } from '@/feature/weather/util';
import { useWeatherStore } from '@/feature/weather/weather-store';
import { Radio, RadioChangeEvent, RadioGroupProps, Tooltip } from 'antd';
import styles from './temp-unit-toggle.module.scss';

export const TempUnitToggle = ({ className, ...props }: RadioGroupProps) => {
    const temperatureUnit = useWeatherStore(state => state.temperatureUnit);
    const setTemperatureUnit = useWeatherStore(state => state.setTemperatureUnit);

    const options = [
        { label: toTemperatureSymbol('celsius'), value: 'celsius' },
        { label: toTemperatureSymbol('fahrenheit'), value: 'fahrenheit' },
    ];

    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        setTemperatureUnit(value);
    };

    return (
        <Tooltip placement="bottomRight" title="Switch temperature unit" mouseEnterDelay={0.3}>
            <Radio.Group
                className={`${styles.toggle} ${className || ''}`}
                options={options}
                onChange={onChange}
                value={temperatureUnit}
                optionType="button"
                buttonStyle="solid"
                {...props}
            />
        </Tooltip>
    );
};
