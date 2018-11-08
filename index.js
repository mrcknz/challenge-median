'use strict';

function findMedian(a, b) {
    if (a.length > 0 && a.length === b.length && typeof a[0] === 'number' ) {
        var test_point = Math.floor(a.length / 2);
        console.log(test_point);
        return (a[test_point] + b[test_point]) / 2;
    }
    return false;
}

exports.findMedian = findMedian;
