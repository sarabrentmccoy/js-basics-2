'use strict';

var globalScope = 3;

var outer = function() {
  var functionScope = 7;
  var globalScope = 12
  return globalScope + functionScope;
};

outer();
