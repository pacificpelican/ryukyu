//  Mocha ChaiJS Tests for Ryukyu JavaScript library
//  http://danmckeown.com/info/ryukyu
//  May 2016    v0.1.1

var assert = require('chai').assert;    //  Chai needs to be installed:
                                        //  npm install chai
var expect = require('chai').expect;    //  Also the Mocha Testing Framework:
                                        //  npm install mocha
var fs = require('fs');
var vm = require('vm');
var path = './js/ryukyu.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('ryukyu_listToArray', function() {
    it('the function ryukyu_listToArray is a function', function () {
      expect(ryukyu_listToArray).to.be.a('function');
    });
});

describe('$ryukyu', function() {
    it('sorting functions should sort integers', function () {
        var sort_array = [];
        var scalar_array = [];
        sort_array = [3,6,2,1];
        scalar_array = [1,2,3,6];
      expect(scalar_array).to.eql($ryukyu("bubbleSort",sort_array));
      expect(scalar_array).to.eql($ryukyu("insertionSort",sort_array));
      expect(scalar_array).to.eql($ryukyu("selectionSort",sort_array));
    });
});
