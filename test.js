var assert = require('assert');

// test for checking if value is in array
describe('Array', function() {
    // get the index
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});