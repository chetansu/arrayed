const assert = require('assert');
const arrayed = require('./arrayed');

describe('Calling arrayed functions', function () {
    const tests = [
        { args: [[20, 22, 15, 9, 8, 15, 22], 3], testFunc: arrayed.max, expected: 22 },      // Get the largest Number in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 2], testFunc: arrayed.min, expected: 8 },      // Get the smallest Number in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 3], testFunc: arrayed.maxX, expected: [22, 20, 15] },      // Get the largest 3 Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 2], testFunc: arrayed.maxX, expected: [22, 20] },      // Get the largest 2 Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 3], testFunc: arrayed.minX, expected: [8, 9, 15] },      // Get the Smallest 3 Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 2], testFunc: arrayed.minX, expected: [8, 9] },      // Get the Smallest 2 Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 3], testFunc: arrayed.maxByRank, expected: 15 },      // Get the largest 3rd Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 2], testFunc: arrayed.maxByRank, expected: 20},      // Get the largest 2nd Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 3], testFunc: arrayed.minByRank, expected: 15 },      // Get the Smallest 3rd Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], 2], testFunc: arrayed.minByRank, expected: 9 },      // Get the Smallest 2nd Numbers in array
        { args: [[20, 22, 15, 9, 8, 15, 22], null], testFunc: arrayed.getUnique, expected: [20,22,15,9,8]},      // Remove Duplicate numbers in Array
        { args: [[20, 22, 15, 9, 8, 15, 22], false], testFunc: arrayed.getUniqueSorted, expected: [22,20,15,9,8]},      // Remove Duplicate in Array and sort it decrementing
        { args: [[20, 22, 15, 9, 8, 15, 22], true], testFunc: arrayed.getUniqueSorted, expected: [8,9,15,20,22]},      // Remove Duplicate in Array and sort
        { args: [[20, 22, 15, 9, 8, 15, 22], false], testFunc: arrayed.sortArray, expected: [22,22,20,15,15,9,8]},      // Remove Duplicate in Array
        { args: [[20, 22, 15, 9, 8, 15, 22], true], testFunc: arrayed.sortArray, expected: [8,9,15,15,20,22,22]}      // Remove Duplicate in Array
    ];

    tests.forEach(({ args, testFunc, expected }) => {
        it(`expected array is ` + expected, function () {
            const res = testFunc(args[0], args[1]);
            console.log("calling function " + testFunc.name + " with array [" + args[0]+"]");
            console.log("Response recieved is " + res);
            if (Array.isArray(res) && Array.isArray(expected)) {
                assert.strictEqual(JSON.stringify(res), JSON.stringify(expected));
            } else {
                assert.strictEqual(res, expected);
            }
        });
    });
});