const arrayed = (() => {

    const max = (numArray) => Math.max(...numArray);
    const min = (numArray) => Math.min(...numArray);
    const maxX = (numArray, x) => getUniqueSorted(numArray).reverse().slice(0, x);
    const minX = (numArray, x) => getUniqueSorted(numArray).slice(0, x);
    const minByRank = (numArray, n = 1) => getUniqueSorted(numArray)[n - 1];
    const maxByRank = (numArray, n = 1) => getUniqueSorted(numArray).reverse()[n - 1];
    const getUniqueSorted = (numArray, incr = true) => sortArray(getUnique(numArray), incr);
    const getUnique = (numArray) => [...new Set(numArray)];
    const compare = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
    const sortArray = (numArray, incr = true) => numArray.sort((a, b) => (incr) ? a - b : b - a);

    return {
        "max": max,
        "min": min,
        "maxX": maxX,
        "minX": minX,
        "minByRank": minByRank,
        "maxByRank": maxByRank,
        "getUnique": getUnique,
        "compare": compare,
        "sortArray": sortArray,
        "getUniqueSorted": getUniqueSorted
    };
})();

module.exports = arrayed;
