'use strict';

var fs = require('fs');
var path = require('path');
var extend = require('extend');
var microtemplates = require('microtemplates');
var beautify = require('js-beautify').js_beautify;

var defaults = {
  module: 'config',
  template: path.join(__dirname, './index.tpl'),
  constants: {}
};

module.exports = function(options) {
  options = extend(defaults, options);
  var tpl = fs.readFileSync(options.template, 'utf-8');
  return beautify(microtemplates(tpl)(options));
};
