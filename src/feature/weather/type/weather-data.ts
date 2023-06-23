interface DailyRecord {
    time: string;
    weatherCode: number;
    maxTemperature: number;
    minTemperature: number;
}

interface HourlyRecord {
    time: string;
    temperature: number;
}

type TempUnit = 'celsius' | 'fahrenheit';

export type { DailyRecord, HourlyRecord, TempUnit };
