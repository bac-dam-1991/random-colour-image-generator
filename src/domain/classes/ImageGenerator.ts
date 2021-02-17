// Interfaces
import { generateNumberArrayBetween } from "../../utility/utility";
import IDimension from "../interfaces/IDimension";
import IPixel from "../interfaces/IPixel";

export default class ImageGenerator {
	// static members
	public static MAX_COLOURS: number = 32768;
	public static DEFAULT_STEP: number = 8;
	public static MAX_BIT: number = 256;

	// private members
	private imgDim: IDimension;
	private pixelDim: IDimension;

	constructor(imgDim: IDimension, pixelDim: IDimension) {
		this.imgDim = imgDim;
		this.pixelDim = pixelDim;
	}

	// public methods
	public getRgbChannels(): number[][] {
		const channelRange: number[] = generateNumberArrayBetween(
			0,
			ImageGenerator.MAX_BIT,
			ImageGenerator.DEFAULT_STEP,
			"upperOnly"
		);

		const redChannel: number[] = [...channelRange];
		const greenChannel: number[] = [...channelRange];
		const blueChannel: number[] = [...channelRange];

		return [redChannel, greenChannel, blueChannel];
	}

	public generate(): IPixel[] {
		const [redChannel, greenChannel, blueChannel] = this.getRgbChannels();

		return [];
	}

	// getters and setters
	public getPixelDim(): IDimension {
		return this.pixelDim;
	}

	public setPixelDim(pixelDim: IDimension): void {
		this.pixelDim = pixelDim;
	}

	public getImgDim(): IDimension {
		return this.imgDim;
	}

	public setImgDim(imgDim: IDimension): void {
		this.imgDim = imgDim;
	}
}
