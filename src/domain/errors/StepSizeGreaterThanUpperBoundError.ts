export default class StepSizeGreaterThanUpperBoundError extends Error {
	constructor() {
		super("Step size cannot be greater than upper bound.");
	}
}
