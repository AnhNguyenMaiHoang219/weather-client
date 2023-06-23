'use client';

import { useWeatherStore } from '@/feature/weather/store';
import { toTempSymbol } from '@/feature/weather/util';
import { Radio, RadioChangeEvent } from 'antd';
import styles from './temp-unit-toggle.module.scss';

export const TempUnitToggle = () => {
    const tempUnit = useWeatherStore(state => state.tempUnit);
    const setTempUnit = useWeatherStore(state => state.setTempUnit);

    const options = [
        { label: toTempSymbol('celsius'), value: 'celsius' },
        { label: toTempSymbol('fahrenheit'), value: 'fahrenheit' },
    ];

    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        setTempUnit(value);
    };

    return (
        <Radio.Group
            className={`temp-unit-toggle ${styles.toggle}`}
            options={options}
            onChange={onChange}
            value={tempUnit}
            optionType="button"
            buttonStyle="solid"
        />
    );
};
