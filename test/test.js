const expect = require('chai').expect;
const sma = require('../dist/index').sma;
const ema = require('../dist/index').ema;
const kc = require('../dist/index').kc;
const boll = require('../dist/index').boll;

describe('Simple Moving Average', function() {
    it('should return an Array', function() {
        let ma = sma([2, 4, 4, 6], 4);
        expect(ma).to.be.an('Array');
    });
    it('should calculate sma', function() {
        let ma = sma([2, 4, 4, 6], 4);
        expect(ma[0]).to.equal(4);
    });
    it('should handle empty input', function() {
        let ma = sma([], 4);
        expect(ma).to.have.lengthOf(0);
    });
    it('should handle big array', function() {
        let arr = [];
        for (let i = 0; i < 1000000; i++) {
            arr.push(Math.random() * 100);
        }
        let period = 20;
        let size = arr.length - period + 1;
        expect(sma(arr, period)).to.have.lengthOf(size);
    });
});

describe('Exponential Moving Average', function() {
    it('should return an Array', function() {
        let ma = ema([2, 4], 2);
        expect(ma).to.be.an('Array');
    });
    it('should calculate ema', function() {
        let ma = ema([2, 4, 6, 4, 8], 3);
        expect(ma).to.have.length(3);
        expect(ma[2]).to.equal(6);
    });
    it('should handle empty input', function() {
        let ma = ema([], 4);
        expect(ma).to.have.lengthOf(0);
    });
    it('should handle big array', function() {
        let arr = [];
        for (let i = 0; i < 1000000; i++) {
            arr.push(Math.random() * 100);
        }
        let period = 20;
        let size = arr.length - period + 1;
        expect(ema(arr, period)).to.have.lengthOf(size);
    });
});

describe('Keltner Channel', function() {
    let data = [
        {high: 21, low: 19, close: 19.5},
        {high: 20, low: 19.4, close: 19.8},
        {high: 23, low: 21.4, close: 22},
        {high: 22, low: 20, close: 21}];

    let kcSMA = kc(data, 2, 1.5);
    let kcEMA = kc(data, 2, 1.5, false);
    it('should return an object', function() {
        expect(kcSMA).to.be.an('Object');
        expect(kcEMA).to.be.an('Object');
    });
    it('should have upper, mid and lower', function() {
        expect(kcSMA).to.have.property('upper');
        expect(kcSMA).to.have.property('mid');
        expect(kcSMA).to.have.property('lower');
        expect(kcEMA).to.have.property('upper');
        expect(kcEMA).to.have.property('mid');
        expect(kcEMA).to.have.property('lower');
    });
});

describe('Bollinger Band', function() {
    let arr = [2, 5, 6, 7, 5, 3];
    let bollSMA = boll(arr, 3, 2);
    let bollEMA = boll(arr, 3, 2, false);
    it('should return an object', function() {
        expect(bollSMA).to.be.an('Object');
        expect(bollEMA).to.be.an('Object');
    });
    it('should have upper, mid and lower', function() {
        expect(bollSMA).to.have.property('upper');
        expect(bollSMA).to.have.property('mid');
        expect(bollSMA).to.have.property('lower');
        expect(bollEMA).to.have.property('upper');
        expect(bollEMA).to.have.property('mid');
        expect(bollEMA).to.have.property('lower');
    });
});
