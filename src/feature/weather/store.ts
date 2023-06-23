import { BASE_URL as OPEN_METEO_BASE_URL } from '@/config/open-meteo';
import { ForecastResponse } from '@/config/open-meteo/type';
import axios from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { trimTemplate } from '../common/util';
import { DailyRecord, HourlyRecord, TempUnit } from './type';
import { buildDailyTempList, buildHourlyTempList } from './util';

type State = {
    hourlyData: HourlyRecord[];
    dailyData: DailyRecord[];
    tempUnit: TempUnit;
    loading: boolean;
    error: any;
};

type Actions = {
    setTempUnit: (tempUnit: TempUnit) => void;
    fetchHourlyTemperature: () => Promise<void>;
};

const useWeatherStore = create(
    immer<State & Actions>((set, get) => ({
        hourlyData: [],
        dailyData: [],
        error: undefined,
        loading: false,
        tempUnit: 'celsius',
        setTempUnit: (tempUnit: TempUnit) => {
            set(state => {
                state.tempUnit = tempUnit;
            });
        },
        fetchHourlyTemperature: async () => {
            set(state => {
                state.loading = true;
            });

            try {
                const latitude = '65.01';
                const longitude = '25.47';
                const tempUnit = get().tempUnit; // console.log(tempUnit);

                const response = await axios.get<ForecastResponse>(
                    trimTemplate(
                        `${OPEN_METEO_BASE_URL}/forecast
                            ?latitude=${latitude}
                            &longitude=${longitude}
                            &temperature_unit=${tempUnit}
                            &timezone=auto
                            &hourly=temperature_2m
                            &daily=weathercode,temperature_2m_max,temperature_2m_min
                        `,
                    ),
                );
                const { hourly, daily } = response.data;

                set(state => {
                    state.hourlyData = buildHourlyTempList(hourly.time, hourly.temperature_2m);
                    state.dailyData = buildDailyTempList(
                        daily.time,
                        daily.weathercode,
                        daily.temperature_2m_max,
                        daily.temperature_2m_min,
                    );
                    state.loading = false;
                    state.error = undefined;
                });
            } catch (error) {
                set(state => {
                    state.error = error;
                    state.loading = false;
                });
            }
        },
    })),
);

export { useWeatherStore };
