let expect = require('chai').expect;
let sma = require('../dist/index').sma;

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
});
