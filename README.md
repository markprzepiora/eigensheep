eigensheep
==========

What do you call a baby eigensheep? A lamb, duh.


## Wat

This is a WIP towards modularizing [Ramda](https://github.com/CrossEye/ramda)
using ES6 modules.


## Is it good?

Getting better all the time.


## Building and running tests

```bash
$ npm install -g broccoli-cli testem
$ git checkout https://github.com/markprzepiora/eigensheep && cd eigensheep
$ npm install

# Run broccoli in one terminal
$ broccoli serve

# And testem in another
$ testem -l phantomjs
```

Tests will be run live as any production code or test code changes.

## Status

Eigensheep is now a drop-in replacement for Ramda.js. The Ramda.js test suite
passes in full. Yay!


## TODO

- ~~Add remaining Ramda.js functions (have ~179/162 so far)~~
- Merge changes from Ramda.js repo since the last few days
- ~~Merge my bug fixes into Ramda.js master~~
- ~~Replace my ad-hoc test suite with real Ramda.js test suite~~
- Add missing functions (isEqual from underscore/lodash!!)
- Categorize functions (list functions, object functions, alises, etc.)
- Create a custom builder
- Fix typos/errors in documentation
- Add CI
