export default class StepSizeOfZeroError extends Error {
	constructor() {
		super("Step size must be a positive integer greater than zero.");
	}
}
