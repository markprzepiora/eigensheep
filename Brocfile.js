var compileModules = require('broccoli-compile-modules');

jsTree = compileModules('src', {
  inputFiles: ['eigensheep.js'],
  output: '/eigensheep.js',
  formatter: 'bundle'
});

module.exports = jsTree;
