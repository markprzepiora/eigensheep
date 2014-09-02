var assert = require('assert');
var R = require('..');

describe('substring', function() {
    it('should return the substring of a string', function() {
        assert.equal(R.substring(2, 5, 'abcdefghijklm'), 'cde');
    });

    it('should be automatically curried', function() {
        var from2 = R.substring(2);
        assert.equal(from2(5, 'abcdefghijklm'), 'cde');
        var from2to5 = R.substring(2, 5);
        assert.equal(from2to5('abcdefghijklm'), 'cde');
    });
});

describe('substringFrom', function() {
    it('should return the trailing substring of a string', function() {
        assert.equal(R.substringFrom(8, 'abcdefghijklm'), 'ijklm');
    });

    it('should be automatically curried', function() {
        var after8 = R.substringFrom(8);
        assert.equal(after8('abcdefghijklm'), 'ijklm');
    });
});

describe('substringTo', function() {
    it('should return the trailing substring of a string', function() {
        assert.equal(R.substringTo(8, 'abcdefghijklm'), 'abcdefgh');
    });

    it('should be automatically curried', function() {
        var through8 = R.substringTo(8);
        assert.equal(through8('abcdefghijklm'), 'abcdefgh');
    });
});

describe('charAt', function() {
    it('should return the character at the nth position of a string', function() {
        assert.equal(R.charAt(8, 'abcdefghijklm'), 'i');
    });

    it('should be automatically curried', function() {
        var at8 = R.charAt(8);
        assert.equal(at8('abcdefghijklm'), 'i');
    });
});

describe('charCodeAt', function() {
    it('should return the ascii character at the nth position of a string', function() {
        assert.equal(R.charCodeAt(8, 'abcdefghijklm'), 105);  // 'a' ~ 97, 'b' ~ 98, ... 'i' ~ 105
    });

    it('should be automatically curried', function() {
        var at8 = R.charCodeAt(8);
        assert.equal(at8('abcdefghijklm'), 105);
    });
});

describe('match', function() {
    var re = /[A-Z]\d\d\-[a-zA-Z]+/;

    it('should determine whether a string matches a regex', function() {
        assert.equal(R.match(re, 'B17-afn').length, 1);
        assert.equal(R.match(re, 'B1-afn'), null);
    });

    it('should be automatically curried', function() {
        var format = R.match(re);
        assert.equal(format('B17-afn').length, 1);
        assert.equal(format('B1-afn'), null);
    });
});

describe('strIndexOf', function() {
    it('should find the index of a substring inside a string', function() {
        assert.equal(R.strIndexOf('c', 'abcdefg'), 2);
    });

    it('should return -1 if the value is not found', function() {
        assert.equal(R.strIndexOf('x', 'abcdefg'), -1);
    });

    it('should be automatically curried', function() {
        var findD = R.strIndexOf('d');
        assert.equal(findD('abcdefg'), 3);
    });
});

describe('strLastIndexOf', function() {
    it('should find the index of a substring inside a string', function() {
        assert.equal(R.strLastIndexOf('a', 'bananas'), 5);
    });

    it('should return -1 if the value is not found', function() {
        assert.equal(R.strLastIndexOf('x', 'abcdefg'), -1);
    });

    it('should be automatically curried', function() {
        var findA = R.strLastIndexOf('a');
        assert.equal(findA('banana split'), 5);
    });
});

describe('toUpperCase', function() {
    it('should uppercase a string', function() {
        assert.equal(R.toUpperCase('abc'), 'ABC');
    });
});

describe('toLowerCase', function() {
    it('should lowercase a string', function() {
        assert.equal(R.toLowerCase('XYZ'), 'xyz');
    });
});

describe('split', function() {
    it('should split a string into an array', function() {
        assert.deepEqual(R.split('.', 'a.b.c.xyz.d'), ['a', 'b', 'c', 'xyz', 'd']);
    });

    it('the split string can be arbitrary', function() {
        assert.deepEqual(R.split('at', 'The Cat in the Hat sat on the mat'), ['The C', ' in the H', ' s', ' on the m', '']);
    });
});
