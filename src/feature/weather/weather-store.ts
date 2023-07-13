import { BASE_URL as OPEN_METEO_BASE_URL } from '@/config/open-meteo';
import { ForecastResponse, TemperatureUnit, WindSpeedQuery } from '@/config/open-meteo/type';
import axios from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { trimTemplate } from '../common/util';
import { CurrentWeather, DailyRecord, HourlyRecord } from './type';
import {
    buildCurrentWeatherData,
    buildDailyDataList,
    buildHourlyTempList,
    toTemperatureSymbol,
    toWindSpeedUnit,
} from './util';

type State = {
    currentWeather?: CurrentWeather;
    hourlyData: HourlyRecord[];
    dailyData: DailyRecord[];
    temperatureUnit: TemperatureUnit;
    temperatureSymbol: string;
    windSpeedQuery: WindSpeedQuery;
    windSpeedUnit: string;
    loading: boolean;
    error: any;
};

type Actions = {
    setTemperatureUnit: (tempUnit: TemperatureUnit) => void;
    fetchWeatherData: () => Promise<void>;
};

const useWeatherStore = create(
    immer<State & Actions>((set, get) => ({
        currentWeather: undefined,
        hourlyData: [],
        dailyData: [],
        temperatureUnit: 'celsius',
        temperatureSymbol: toTemperatureSymbol('celsius'),
        windSpeedQuery: 'ms',
        windSpeedUnit: toWindSpeedUnit('ms'),
        error: undefined,
        loading: false,
        setTemperatureUnit: (temperatureUnit: TemperatureUnit) => {
            set(state => {
                state.temperatureUnit = temperatureUnit;
                state.temperatureSymbol = toTemperatureSymbol(temperatureUnit);
            });
            get().fetchWeatherData();
        },
        fetchWeatherData: async () => {
            set(state => {
                state.loading = true;
            });

            try {
                const latitude = '65.01';
                const longitude = '25.47';
                const tempUnit = get().temperatureUnit;
                const windSpeedQuery = get().windSpeedQuery;

                const response = await axios.get<ForecastResponse>(
                    trimTemplate(
                        `${OPEN_METEO_BASE_URL}/forecast
                            ?latitude=${latitude}
                            &longitude=${longitude}
                            &temperature_unit=${tempUnit}
                            &windspeed_unit=${windSpeedQuery}
                            &timezone=auto
                            &current_weather=true
                            &hourly=temperature_2m
                            &daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,windspeed_10m_max
                        `,
                    ),
                );
                const { current_weather, hourly, daily } = response.data;

                set(state => {
                    state.currentWeather = buildCurrentWeatherData(current_weather);
                    state.hourlyData = buildHourlyTempList(hourly.time, hourly.temperature_2m);
                    state.dailyData = buildDailyDataList(
                        daily.time,
                        daily.weathercode,
                        daily.temperature_2m_max,
                        daily.temperature_2m_min,
                        daily.uv_index_max,
                        daily.windspeed_10m_max,
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
