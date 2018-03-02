const expect = require('chai').expect;
const sma = require('../dist/index').sma;
const ema = require('../dist/index').ema;
const kc = require('../dist/index').kc;

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

    let oSMA = kc(data, 2, 1.5);
    let oEMA = kc(data, 2, 1.5, false);
    it('should return an object', function() {
        expect(oSMA).to.be.an('Object');
        expect(oEMA).to.be.an('Object');
    });
    it('should have upper, mid and lower', function() {
        expect(oSMA).to.have.property('upper');
        expect(oSMA).to.have.property('mid');
        expect(oSMA).to.have.property('lower');
        expect(oEMA).to.have.property('upper');
        expect(oEMA).to.have.property('mid');
        expect(oEMA).to.have.property('lower');
    });
});
