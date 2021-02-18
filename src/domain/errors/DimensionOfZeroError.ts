export default class DimensionOfZeroError extends Error {
	constructor() {
		super("Cannot find dimension of zero or negative number.");
	}
}
