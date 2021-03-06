var compileModules = require('broccoli-compile-modules'),
    moveFile       = require('broccoli-file-mover'),
    uglify         = require('broccoli-uglify-js'),
    mergeTrees     = require('broccoli-merge-trees'),
    es6            = require('broccoli-es6-concatenator'),
    pickFiles      = require('broccoli-static-compiler'),
    wrap           = require('broccoli-wrap'),
    exportTree     = require('broccoli-export-tree');

var srcTree = pickFiles('eigensheep', { srcDir: '/', destDir: '/eigensheep' });

var amdBuild = es6(srcTree, {
  inputFiles: ['**/*.js'],
  wrapInEval: false,
  outputFile: '/assets/eigensheep.amd.js'
});

var globalBuild = compileModules(srcTree, {
  inputFiles: ['eigensheep/installers/window.js'],
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

var bowerTree = pickFiles('bower_components', { srcDir: '/', destDir: 'vendor' });
var amdLoaderBuild = mergeTrees([srcTree, bowerTree]);
amdLoaderBuild = es6(amdLoaderBuild, {
  loaderFile: 'vendor/loader.js/loader.js',
  inputFiles: ['eigensheep/**/*.js'],
  wrapInEval: false,
  outputFile: '/assets/eigensheep.amd.loader.js',
  legacyFilesToAppend: []
});
var amdLoaderMinBuild = uglifiedBuild(amdLoaderBuild, '/assets/eigensheep.amd.loader.js');

var combinedTree = mergeTrees(
  [amdBuild, amdMinBuild, globalBuild, globalMinBuild, amdLoaderBuild, amdLoaderMinBuild]);

var exportTree = exportTree(combinedTree, {
  destDir: 'dist'
});

// module.exports = mergeTrees([combinedTree]);
module.exports = mergeTrees([combinedTree, exportTree]);
