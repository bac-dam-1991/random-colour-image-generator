import { generateNumberArrayBetween } from "../utility/utility";

test("Number array generator to produce array exclusive of both bounds.", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 1, "()");

	expect(numArray).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Number array generator to produce array inclusive of both bounds.", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 1, "[]");

	expect(numArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Number array generator to produce array inclusive of lower bound only", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 1, "[)");

	expect(numArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Number array generator to produce array inclusive of upper bound only", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 1, "(]");

	expect(numArray).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Number array generator to produce array inclusive of both bounds and with step size of 2", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 2, "[]");

	expect(numArray).toStrictEqual([1, 3, 5, 7, 9]);
});

test("Number array generator to produce array with step size larger than upper bound", () => {
	const numArray: number[] = generateNumberArrayBetween(1, 10, 20, "(]");

	expect(numArray).toStrictEqual([]);
});
