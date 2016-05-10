//  Mocha ChaiJS Tests for joeypc.com JavaScript library
//  http://danmckeown.info/code/ryukyu/ryukyu-docs/randomColorsPage.html
//  May 2016    v0.1.0

var fs = require('fs');
var vm = require('vm');
var path = './js/joeypc.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

var assert = require('chai').assert;    //  Chai needs to be installed:
                                        //  npm install chai
var expect = require('chai').expect;    //  Also the Mocha Testing Framework:
                                        //  npm install mocha

describe('joeypc_make_random_light_text', function() {
    it('the function rjoeypc_make_random_light_text() is a function', function () {
      expect(joeypc_make_random_light_text).to.be.a('function');
    });
});
