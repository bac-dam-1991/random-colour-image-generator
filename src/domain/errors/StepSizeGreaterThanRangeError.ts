export default class StepSizeGreaterThanRangeError extends Error {
	constructor(lowerBound: number, upperBound: number, stepSize: number) {
		super(
			`The step size of ${stepSize} is larger than the range between ${lowerBound} and ${upperBound}.`
		);
	}
}
