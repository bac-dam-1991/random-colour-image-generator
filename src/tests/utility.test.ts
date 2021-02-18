import DimensionOfZeroError from "../domain/errors/DimensionOfZeroError";
import LowerBoundGreaterThanUpperBoundError from "../domain/errors/LowerBoundGreaterThanUpperBoundError";
import NegativeStepSizeError from "../domain/errors/NegativeStepSizeError";
import StepSizeGreaterThanRangeError from "../domain/errors/StepSizeGreaterThanRangeError";
import StepSizeGreaterThanUpperBoundError from "../domain/errors/StepSizeGreaterThanUpperBoundError";
import StepSizeOfZeroError from "../domain/errors/StepSizeOfZeroError";

// Interfaces
import IDimension from "../domain/interfaces/IDimension";

// Utility functions
import {
	byAscendingOrder,
	findDimensionsOf,
	generateNumberArrayBetween,
	generateRandomNumberArray,
} from "../utility/utility";

test("Number array generator to produce array exclusive of both bounds.", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 1, "none");

	expect(numArray).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Number array generator to produce array inclusive of both bounds.", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 1, "both");

	expect(numArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Number array generator to produce array inclusive of lower bound only", () => {
	const numArray: number[] = generateNumberArrayBetween(
		1,
		10,
		1,
		"lowerOnly"
	);

	expect(numArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Number array generator to produce array inclusive of upper bound only", () => {
	const numArray: number[] = generateNumberArrayBetween(
		1,
		10,
		1,
		"upperOnly"
	);

	expect(numArray).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Number array generator to produce array inclusive of both bounds and with step size of 2", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 2, "both");

	expect(numArray).toStrictEqual([1, 3, 5, 7, 9]);
});

test("Number generator to throw error when step size is larger than upper bound", () => {
	function func() {
		generateNumberArrayBetween(1, 10, 20, "upperOnly");
	}

	expect(func).toThrowError(StepSizeGreaterThanUpperBoundError);
});

test("Number generator to throw error when step size is negative", () => {
	function func() {
		generateNumberArrayBetween(1, 10, -1, "none");
	}

	expect(func).toThrowError(NegativeStepSizeError);
});

test("Number generator to throw error when lower bound is greater than upper bound.", () => {
	function func() {
		generateNumberArrayBetween(2, 1, 1, "none");
	}

	expect(func).toThrowError(LowerBoundGreaterThanUpperBoundError);
});

test("Number generator to throw error when step size is greater than range between lower bound and upper bound.", () => {
	function func() {
		generateNumberArrayBetween(5, 10, 7, "none");
	}

	expect(func).toThrowError(StepSizeGreaterThanRangeError);
});

test("Number generator to throw error when step size zero.", () => {
	function func() {
		generateNumberArrayBetween(1, 2, 0, "none");
	}

	expect(func).toThrowError(StepSizeOfZeroError);
});

test("find all possible dimensions of 10.", () => {
	const dims: IDimension[] = findDimensionsOf(10);

	expect(dims).toStrictEqual([
		{ width: 1, height: 10 },
		{ width: 2, height: 5 },
		{ width: 5, height: 2 },
		{ width: 10, height: 1 },
	]);
});

test("DimensionOfZeroError to be thrown.", () => {
	function func() {
		findDimensionsOf(0);
	}

	expect(func).toThrowError(DimensionOfZeroError);
});

test("generate array of no repeating random numbers.", () => {
	const numberArray: number[] = generateRandomNumberArray(
		1,
		10,
		10,
		false,
		"both"
	);

	const sortedArray: number[] = numberArray.sort(byAscendingOrder);

	expect(sortedArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("random number generator to throw error when lower bound is greater than upper bound.", () => {
	function func() {
		generateRandomNumberArray(12, 10, 1, false, "both");
	}

	expect(func).toThrowError(LowerBoundGreaterThanUpperBoundError);
});
