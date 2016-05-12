//  Mocha ChaiJS Tests for joeypc.com JavaScript library
//  http://danmckeown.info/code/ryukyu/ryukyu-docs/randomColorsPage.html
//  May 2016    v0.1.0

var chai = require('chai');
chai.use(require('chai-jq'));

var domSimulator = require('jsdom-global')();   //  This requires jsdom
                                        //  npm install jsdom-global
                                        //  npm install jsdom
$ = require('../js/jquery.js');

var fs = require('fs');
var vm = require('vm');

//  var $ = require('../js/jquery.js');
// var jQpath = './js/jquery.js';
// var jQcode = fs.readFileSync(jQpath);
// vm.runInThisContext(jQcode);

//  joeypc_make_random_light_text = require('../js/joeypc.js');
var path = './js/joeypc.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

//	var jq_plugin  = require("chai-jq");       //  This requires chai-jq
                                        //  npm install chai-jq
//	chai.use(jq_plugin);                    // Inject jq plugin.
//  var assert = require('chai').assert;    //  Chai needs to be installed:
                                        //  npm install chai
//  var expect = require('chai').expect;    //  Also the Mocha Testing Framework:
                                        //  npm install mocha
var expect = chai.expect;
var assert = chai.assert;

describe('joeypc_make_random_light_text', function() {
    it('the function joeypc_make_random_light_text() is a function', function () {
      expect(joeypc_make_random_light_text).to.be.a('function');
    });
});

describe('joeypc_change_background', function() {
    it('the function joeypc_change_background yellow changes the body background color to yellow', function () {
		joeypc_change_background('yellow');
			var the_body = $('body');
			expect(the_body).to.be.$visible;
			expect(the_body).to.have.$css('background-color', 'yellow');
    });
});

describe('joeypc_random_digit', function() {
    it('the function joeypc_random_digit returns a number from 0 to 9', function () {
      var the_digit = joeypc_random_digit();
		console.log('digit returned: ' + the_digit);
		assert.isBelow(the_digit, 10, 'the digit is less than 10');
    });
});