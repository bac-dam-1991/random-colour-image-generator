// Interfaces
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
	let currentNumber: number = lowerBound;

	if (inclusivity === "()" || inclusivity === "(]") {
		currentNumber += step;
	}

	const array: number[] = [];

	while (currentNumber <= upperBound) {
		if (
			currentNumber === upperBound &&
			(inclusivity === "()" || inclusivity === "[)")
		) {
			break;
		}
		array.push(currentNumber);
		currentNumber += step;
	}

	return array;
};

export const findDimensionsOf = (val: number): IDimension[] => {
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
