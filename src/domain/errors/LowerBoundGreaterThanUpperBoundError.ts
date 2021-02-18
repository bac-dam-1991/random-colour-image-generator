export default class LowerBoundGreaterThanUpperBoundError extends Error {
	constructor(lowerBound: number, upperBound: number) {
		super(
			`Lower bound (${lowerBound}) cannot be greater than upper bound (${upperBound}).`
		);
	}
}
