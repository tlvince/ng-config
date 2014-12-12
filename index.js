'use strict';

var fs = require('fs');
var extend = require('extend');
var microtemplates = require('microtemplates');

var defaults = {
  module: 'config',
  template: './index.tpl',
  constants: {}
};

module.exports = function(options) {
  options = extend(defaults, options);
  var tpl = fs.readFileSync(options.template, 'utf-8');
  return microtemplates(tpl)(options);
};
