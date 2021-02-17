export default class ColourChannel {
	private colourChannel: number[] = [];

	constructor(channel: number[]) {
		this.colourChannel = channel;
	}

	// public members
	public shuffle(): number[] {
		return this.colourChannel;
	}

	// getters and setters
	public getColourChannel(): number[] {
		return this.colourChannel;
	}

	public setColourChannel(channel: number[]): void {
		this.colourChannel = channel;
	}
}
