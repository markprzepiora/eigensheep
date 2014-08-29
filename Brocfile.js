var compileModules = require('broccoli-compile-modules'),
    moveFile       = require('broccoli-file-mover'),
    uglify         = require('broccoli-uglify-js'),
    mergeTrees     = require('broccoli-merge-trees'),
    es6            = require('broccoli-es6-concatenator'),
    pickFiles      = require('broccoli-static-compiler'),
    wrap           = require('broccoli-wrap');

// var bower = pickFiles('bower_components', {
//   srcDir: '/',
//   inputFiles: [ '**/*' ],
//   destDir: '/bower_components'
// });

// var loaderJS = pickFiles('bower_components/loader.js', {
//   srcDir: '/',
//   files: [ 'loader.js' ],
//   destDir: '/'
// });

// var jsTree = mergeTrees(['src', loaderJS]);
// jsTree = es6(jsTree, {
//   loaderFile: 'loader.js',
//   inputFiles: ['eigensheep.js'],
//   wrapInEval: false,
//   outputFile: '/eigensheep.prod.js'
// });

var amdBuild = es6('src', {
  inputFiles: ['**/*.js'],
  wrapInEval: false,
  outputFile: '/assets/eigensheep.amd.js'
});

var globalBuild = compileModules('src', {
  inputFiles: ['eigensheep.js'],
  output:     '/assets/eigensheep.global.js',
  formatter:  'bundle'
});

function uglifiedBuild(tree, src, dest) {
  if (!dest) {
    dest = src.replace(/\.js$/, '.min.js');
  }

  var renamedTree = moveFile(tree, {
    srcFile: src,
    destFile: dest
  });

  return uglify(renamedTree, {
    mangle: true,
    compress: true
  });
}

var globalMinBuild = uglifiedBuild(globalBuild, '/assets/eigensheep.global.js');
var amdMinBuild = uglifiedBuild(amdBuild, '/assets/eigensheep.amd.js');

// var globalMinBuild = moveFile(globalBuild, {
//   srcFile: '/eigensheep.global.js',
//   destFile: '/eigensheep.global.min.js'
// });

// globalMinBuild = uglify(globalMinBuild, {
//   mangle: true,
//   compress: true
// });

module.exports = mergeTrees([amdBuild, amdMinBuild, globalBuild, globalMinBuild]);
