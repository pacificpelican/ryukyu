//  Mocha ChaiJS Tests for Ryukyu JavaScript library
//  http://danmckeown.info/code/ryukyu/ryukyu-docs/ryukyuJSinfo.html
//  May 2016    v0.1.3
                                        //  npm install mocha
var assert = require('chai').assert;    //  npm install chai
var expect = require('chai').expect;

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
        sort_array = [3,6,34,2,1];
        scalar_array = [1,2,3,6,34];
        expect(scalar_array).to.eql($ryukyu("bubbleSort",sort_array));
        expect(scalar_array).to.eql($ryukyu("insertionSort",sort_array));
        expect(scalar_array).to.eql($ryukyu("selectionSort",sort_array));
    });
});

var test_array = [3,6,34,2,'Bogey',1];
var new_obj = ryukyu_arrayToList(test_array);

describe('$ryukyu', function() {
    it('convert ryukyu custom linked list object to array', function () {
        var old_array = ryukyu_listObjectToArray(new_obj);
        expect(old_array).to.eql(test_array);
    });
});
