'use strict';

/**
 * Calculate simple moving average
 *
 * @param {Array} data Data array
 * @param {Number} period Number of time periods
 *
 * @return {Array} Moving average
 */
export function sma(data, period) {
    if (!Number.isInteger(period)) {
        throw new Error('Invalid Argument: period should be an Integer');
    }

    if (data.length === 0) {
        return [];
    }

    if (data.length < period) {
        throw new Error('Invalid Argument: period is greater than data length');
    }

    let mas = [];

    let sum = 0;
    for (let i = 0; i < period; i++) {
        sum += data[i];
    }
    mas.push(sum);

    for (let i = period; i < data.length; i++) {
        let val = data[i] + mas[i-period] - data[i-period];
        mas.push(val);
    }

    for (let i = 0; i < mas.length; i++) {
        mas[i] /= period;
    }

    return mas;
}

/**
 * Calculate exponential moving average
 *
 * @param {Array} data Data array
 * @param {Number} period Number of time periods
 *
 * @return {Array} Moving average
 */
export function ema(data, period) {
    if (!Number.isInteger(period)) {
        throw new Error('Invalid Argument: period should be an Integer');
    }

    if (data.length === 0) {
        return [];
    }

    if (data.length < period) {
        throw new Error('Invalid Argument: period is greater than data length');
    }

    let mas = [];
    let multiplier = 2/period;

    let sum = 0;
    for (let i = 0; i < period; i++) {
        sum += data[i];
    }
    mas.push(sum/period);

    for (let i = period; i < data.length; i++) {
        let val = ((period[i] - mas[i - period]) * multiplier) + mas[i-period];
        mas.push(val);
    }

    return mas;
}
