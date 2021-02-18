export default class LowerBoundEqualsUpperBoundError extends Error {
	constructor() {
		super("Lower bound cannot equal upper bound.");
	}
}
