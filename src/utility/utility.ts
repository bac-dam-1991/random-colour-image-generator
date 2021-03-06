// Interfaces
import DimensionOfZeroError from "../domain/errors/DimensionOfZeroError";
import LowerBoundEqualsUpperBoundError from "../domain/errors/LowerBoundEqualsUpperBoundError";
import LowerBoundGreaterThanUpperBoundError from "../domain/errors/LowerBoundGreaterThanUpperBoundError";
import NegativeStepSizeError from "../domain/errors/NegativeStepSizeError";
import StepSizeGreaterThanRangeError from "../domain/errors/StepSizeGreaterThanRangeError";
import StepSizeGreaterThanUpperBoundError from "../domain/errors/StepSizeGreaterThanUpperBoundError";
import StepSizeOfZeroError from "../domain/errors/StepSizeOfZeroError";
import IDimension from "../domain/interfaces/IDimension";
import IRGB from "../domain/interfaces/IRGB";

// Types
import InclusivityType from "../domain/types/InclusivityType";

export const generateRgbString = (value: IRGB): string => {
	return `rgb(${value.red}, ${value.green}, ${value.blue})`;
};

export const generateNumberArrayBetween = (
	lowerBound: number,
	upperBound: number,
	step: number,
	inclusivity: InclusivityType
): number[] => {
	if (step > upperBound) throw new StepSizeGreaterThanUpperBoundError();
	if (step < 0) throw new NegativeStepSizeError();
	if (lowerBound === upperBound) throw new LowerBoundEqualsUpperBoundError();
	if (lowerBound > upperBound)
		throw new LowerBoundGreaterThanUpperBoundError(lowerBound, upperBound);
	if (step > upperBound - lowerBound)
		throw new StepSizeGreaterThanRangeError(lowerBound, upperBound, step);
	if (step === 0) throw new StepSizeOfZeroError();

	let currentNumber: number = lowerBound;

	if (inclusivity === "none" || inclusivity === "upperOnly") {
		currentNumber += step;
	}

	const array: number[] = [];

	while (currentNumber <= upperBound) {
		if (
			currentNumber === upperBound &&
			(inclusivity === "none" || inclusivity === "lowerOnly")
		) {
			break;
		}
		array.push(currentNumber);
		currentNumber += step;
	}

	return array;
};

export const findDimensionsOf = (val: number): IDimension[] => {
	if (val <= 0) throw new DimensionOfZeroError();

	const dimensions: IDimension[] = [];

	for (let i = 1; i <= val; i++) {
		const x: number = i;

		let y: number = 0;

		if (val % x !== 0) {
			continue;
		}

		y = val / x;

		dimensions.push({ width: x, height: y });
	}

	return dimensions;
};

export const generateRandomNumberArray = (
	lowerBound: number,
	upperBound: number,
	size: number,
	canContainDuplicate: boolean,
	inclusivity: InclusivityType
): number[] => {
	if (lowerBound > upperBound)
		throw new LowerBoundGreaterThanUpperBoundError(lowerBound, upperBound);
	if (lowerBound === upperBound) throw new LowerBoundEqualsUpperBoundError();

	const numberArray: number[] = [];

	let min: number = lowerBound;
	let max: number = upperBound;

	if (inclusivity === "none" || inclusivity === "upperOnly") {
		min += 1;
	}

	if (inclusivity === "none" || inclusivity === "lowerOnly") {
		max -= 1;
	}

	while (numberArray.length < size) {
		const n: number = Math.floor(Math.random() * max) + min;

		if (!canContainDuplicate && numberArray.includes(n)) {
			continue;
		}

		numberArray.push(n);
	}

	return numberArray;
};

export const byAscendingOrder = (a: number, b: number): number => {
	if (a > b) return 1;
	if (b > a) return -1;
	return 0;
};
