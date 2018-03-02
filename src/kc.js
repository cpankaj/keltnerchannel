'use strict';

import {sma, ema} from './ma';

/**
 * Calculates keltner channel
 *
 * @param {Array} data Contains array of objects [{high, low and close}...]
 * @param {Number} period Number of time periods
 * @param {Number} multiplier Width multiplier for the channel
 * @param {Boolean} simple If set SMA is used otherwise EMA
 *
 * @return {Object} keltner channel data - {upper: [], mid: [], lower: []}
 */
export function kc(data, period, multiplier, simple = true) {
    if (!Number.isInteger(period)) {
        throw new Error('Invalid Argument: period should be an Integer');
    }

    if (period <= 0) {
        throw new Error('Invalid Argument: period should be greater than 0');
    }

    if (typeof multiplier !== 'number') {
        throw new Error('Invalid Argument: multiplier should be a Number');
    }

    let tp = [];
    let range = [];

    data.forEach((d) => {
        if (!d.hasOwnProperty('high')
            || !d.hasOwnProperty('low')
            || !d.hasOwnProperty('close')) {
            throw new Error('Invalid Argument: expecting {high, low, close}');
        }

        tp.push((d.high + d.low + d.close) / 3);
        range.push(d.high - d.low);
    });

    let m = simple ? sma : ema;

    let mid = m(tp, period);
    let width = m(range, period);
    let upper = [];
    let lower = [];

    for (let i = 0; i < width.length; i++) {
        let w = width[i] * multiplier;
        upper.push(mid[i] + w);
        lower.push(mid[i] - w);
    }

    return {
        upper,
        mid,
        lower,
    };
}
