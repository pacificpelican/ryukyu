var fs = require('fs');
var vm = require('vm');
//  var path = require('../js/ryukyu.js');
var path = './js/ryukyu.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
describe('ryukyu_listToArray', function() {
    it('the function ryukyu_listToArray is a function', function () {
      expect(ryukyu_listToArray).to.be.a('function');
    });
});
describe('$ryukyu', function() {
    it('sorting functions should sort integers', function () {
        var sort_array = [];
        var scalar_array = [];
        sort_array = $ryukyu("bubbleSort",[3,6,2,1]);
        scalar_array = [1,2,3,6];
//      assert.equal(scalar_array, sort_array);
      expect(scalar_array).to.eql(sort_array);
      expect(scalar_array).to.eql($ryukyu("insertionSort",scalar_array));
      expect(scalar_array).to.eql($ryukyu("selectionSort",scalar_array));
    });
});

describe('$ryukyu', function() {
    it('is 5 equal to 5?????', function () {
      assert.equal(5, 5);
    });
});
