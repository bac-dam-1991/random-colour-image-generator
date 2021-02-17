"use strict";
exports.__esModule = true;
exports.generateRgbString = function (value) {
    return "rgb(" + value.red + ", " + value.green + ", " + value.blue + ")";
};
exports.generateNumberArrayBetween = function (lowerBound, upperBound, step, inclusivity) {
    var currentNumber = lowerBound;
    if (inclusivity === "none" || inclusivity === "upperOnly") {
        currentNumber += step;
    }
    var array = [];
    while (currentNumber <= upperBound) {
        if (currentNumber === upperBound &&
            (inclusivity === "none" || inclusivity === "lowerOnly")) {
            break;
        }
        array.push(currentNumber);
        currentNumber += step;
    }
    return array;
};
exports.findDimensionsOf = function (val) {
    var dimensions = [];
    for (var i = 1; i <= val; i++) {
        var x = i;
        var y = 0;
        if (val % x !== 0) {
            continue;
        }
        y = val / x;
        dimensions.push({ width: x, height: y });
    }
    return dimensions;
};
exports.generateRandomNumberArray = function (lowerBound, upperBound, size, canContainDuplicate, inclusivity) {
    var numberArray = [];
    var min = lowerBound;
    var max = upperBound;
    if (inclusivity === "none" || inclusivity === "upperOnly") {
        min += 1;
    }
    if (inclusivity === "none" || inclusivity === "lowerOnly") {
        max -= 1;
    }
    while (numberArray.length < size) {
        var n = Math.floor(Math.random() * max) + min;
        if (!canContainDuplicate && numberArray.includes(n)) {
            continue;
        }
        numberArray.push(n);
    }
    return numberArray;
};
exports.byAscendingOrder = function (a, b) {
    if (a > b)
        return 1;
    if (b > a)
        return -1;
    return 0;
};
