import { WindSpeedQuery } from '@/config/open-meteo/type';

const DEGREE_SYMBOL = '\u00b0';
const WIND_SPEED_QUERY_TO_WIND_SPEED_UNIT = new Map<WindSpeedQuery, string>([
    ['kmh', 'km/h'],
    ['ms', 'm/s'],
    ['mph', 'mph'],
    ['kn', 'knots'],
]);

export { DEGREE_SYMBOL, WIND_SPEED_QUERY_TO_WIND_SPEED_UNIT };
