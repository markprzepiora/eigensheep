var compileModules = require('broccoli-compile-modules'),
    moveFile       = require('broccoli-file-mover'),
    uglify         = require('broccoli-uglify-js'),
    mergeTrees     = require('broccoli-merge-trees'),
    es6            = require('broccoli-es6-concatenator');

var jsTree = es6('src', {
  inputFiles: ['eigensheep.js'],
  wrapInEval: false,
  outputFile: '/eigensheep.prod.js'
});

// jsTree = compileModules('src', {
//   inputFiles: ['eigensheep.js'],
//   output: '/eigensheep.prod.js',
//   formatter: 'bundle'
// });

minJsTree = moveFile(jsTree, {
  srcFile: '/eigensheep.prod.js',
  destFile: '/eigensheep.min.js'
});

minJsTree = uglify(minJsTree, {
  mangle: true,
  compress: true
});

module.exports = mergeTrees([jsTree, minJsTree]);
