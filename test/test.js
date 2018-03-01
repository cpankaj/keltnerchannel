const expect = require('chai').expect;
const sma = require('../dist/index').sma;

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
