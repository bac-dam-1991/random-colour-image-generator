import { generateRandomNumberArray } from "../../utility/utility";

export default class ColourChannel {
	private colourChannel: number[] = [];

	constructor(channel: number[]) {
		this.colourChannel = channel;
	}

	// public members
	public shuffle(): number[] {
		const orderIndex: number[] = generateRandomNumberArray(
			0,
			this.colourChannel.length,
			this.colourChannel.length,
			false,
			"both"
		);

		const shuffledArray: number[] = [];

		for (let i = 0; i < orderIndex.length; i++) {
			shuffledArray.push(this.colourChannel[orderIndex[i]]);
		}

		return shuffledArray;
	}

	// getters and setters
	public getColourChannel(): number[] {
		return this.colourChannel;
	}

	public setColourChannel(channel: number[]): void {
		this.colourChannel = channel;
	}
}
