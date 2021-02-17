// Interfaces
import { generateNumberArrayBetween } from "../../utility/utility";
import IDimension from "../interfaces/IDimension";
import IPixel from "../interfaces/IPixel";
import ColourChannel from "./ColourChannel";

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

	public generate(): IPixel[] {
		const channelRange: number[] = generateNumberArrayBetween(
			0,
			ImageGenerator.MAX_BIT,
			ImageGenerator.DEFAULT_STEP,
			"upperOnly"
		);

		const shuffledRed: number[] = new ColourChannel(channelRange).shuffle();
		const shuffledGreen: number[] = new ColourChannel(
			channelRange
		).shuffle();
		const shuffledBlue: number[] = new ColourChannel(
			channelRange
		).shuffle();

		console.log(shuffledRed);
		console.log(shuffledGreen);
		console.log(shuffledBlue);

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
