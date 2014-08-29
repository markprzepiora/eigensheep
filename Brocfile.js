var compileModules = require('broccoli-compile-modules'),
    moveFile       = require('broccoli-file-mover'),
    uglify         = require('broccoli-uglify-js'),
    mergeTrees     = require('broccoli-merge-trees'),
    es6            = require('broccoli-es6-concatenator'),
    pickFiles      = require('broccoli-static-compiler'),
    wrap           = require('broccoli-wrap'),
    exportTree     = require('broccoli-export-tree');

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

var srcTree = pickFiles('eigensheep', { srcDir: '/', destDir: '/eigensheep' });

var amdBuild = es6(srcTree, {
  inputFiles: ['**/*.js'],
  wrapInEval: false,
  outputFile: '/assets/eigensheep.amd.js'
});

var globalBuild = compileModules(srcTree, {
  inputFiles: ['eigensheep/r.js'],
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

var testTree = pickFiles('test', { srcDir: '/', destDir: 'test' });
var bowerTree = pickFiles('bower_components', { srcDir: '/', destDir: 'vendor' });
var testBuild = mergeTrees([srcTree, testTree, bowerTree]);
testBuild = es6(testBuild, {
  loaderFile: 'vendor/loader.js/loader.js',
  inputFiles: ['eigensheep/**/*.js'],
  wrapInEval: false,
  outputFile: '/assets/eigensheep.test.js',
  legacyFilesToAppend: ['vendor/qunit/qunit/qunit.js', 'test/test_helper.js']
});

// var combinedTree = mergeTrees([amdBuild, amdMinBuild, globalBuild, globalMinBuild]);
var combinedTree = mergeTrees([amdBuild, amdMinBuild, globalBuild, globalMinBuild, testBuild]);

// var exportTree = exportTree(combinedTree, {
//   destDir: 'dist'
// });

// module.exports = mergeTrees([combinedTree, exportTree]);
module.exports = mergeTrees([combinedTree]);
