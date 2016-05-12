//  Mocha ChaiJS Tests for joeypc.com JavaScript library
//  http://danmckeown.info/code/ryukyu/ryukyu-docs/randomColorsPage.html
//  May 2016    v0.1.1

var chai = require('chai');		//  npm install chai
chai.use(require('chai-jq'));	//  npm install chai-jq

var domSimulator = require('jsdom-global')();   //  npm install jsdom-global
                                        		//  npm install jsdom
$ = require('../js/jquery.js');		//	link to jQuery file

var fs = require('fs');
var vm = require('vm');

var path = './js/joeypc.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

var expect = chai.expect;
var assert = chai.assert;

describe('joeypc_make_random_light_text', function() {
    it('the function joeypc_make_random_light_text() is a function', function () {
      expect(joeypc_make_random_light_text).to.be.a('function');
    });
});

describe('joeypc_change_background', function() {
    it('the function joeypc_change_background(yellow) changes the body background color to yellow', function () {
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
