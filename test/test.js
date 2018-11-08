'use strict';

require('chai').should();

const { findMedian } = require('../index.js');

describe('findMedian', function () {

  it('should return the median of the union of two arrays of integers', function () {
    findMedian([1,2,3], [2,3,4]).should.eql(2.5);
    findMedian([1,2,3], [5,6,7]).should.eql(4);
    findMedian([1,6,3], [5,2,7]).should.eql(4);
    findMedian([1,6,3], [5,2,7]).should.eql(4);
    findMedian([2,10,30,53,99], [11,14,25,46,88]).should.eql(27.5);
    findMedian([-2,10,-30,53,99], [-11,14,-25,46,88]).should.eql(12);
  });

  it('should return false if invalid arguments are passed', function () {
    findMedian([1,2,3]).should.eql(false);
    findMedian(['ooops','ooops','ooops'], ['1','2','3']).should.eql(false);
    findMedian([1,2], [1,2,3]).should.eql(false);
    findMedian([1], [1,2]).should.eql(false);
  });

});
