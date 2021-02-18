export default class NegativeStepSizeError extends Error {
	constructor() {
		super("Step size cannot be negative.");
	}
}
