// Interfaces
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
