var assert = require('assert');
var index = require('../index.js');
var event = require('../event.json');

/**
 * is equal
 */
describe('testEqual', function()
{
    it('should be equal', function(){
        assert.equal(event.unit_test.test_equal, testEqual(event));
    });
});

/**
 * is equal JSON
 */
describe('testJson', function()
{
    it('should have the same array values', function(){
        assert.deepEqual(event.unit_test.test_json, testJson(event));
    });
});

/**
 * is array
 */
describe('Array', function()
{
    it('should return an array', function(){
        assert(Array.isArray('a,b,c'.split(',')))
    });
});