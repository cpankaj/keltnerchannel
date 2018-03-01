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

    mas = mas.map((x) => (x/period));

    return mas;
}
