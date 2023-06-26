import format from 'date-fns/format';

function toDateWithHour(time: string): string {
    return format(new Date(time), 'MMM dd H:mm');
}

function toHour(time: string): string {
    return format(new Date(time), 'H:mm');
}

export { toDateWithHour, toHour };
