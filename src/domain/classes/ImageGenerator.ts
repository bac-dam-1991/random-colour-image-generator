// Interfaces
import { generateNumberArrayBetween } from "../../utility/utility";
import ICoord from "../interfaces/ICoord";
import IDimension from "../interfaces/IDimension";
import IPixel from "../interfaces/IPixel";
import IRGB from "../interfaces/IRGB";
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

		const allCoords: ICoord[] = [];

		for (let i = 0; i < this.imgDim.height * this.imgDim.width; i++) {
			const tempCoord: ICoord = {
				x: (i % this.imgDim.width) * this.pixelDim.width,
				y: Math.floor(i / this.imgDim.width) * this.pixelDim.height,
			};

			allCoords.push(tempCoord);
		}

		console.log(allCoords);

		const allColours: IRGB[] = [];

		for (let iR = 0; iR < channelRange.length; iR++) {
			for (let iG = 0; iG < channelRange.length; iG++) {
				for (let iB = 0; iB < channelRange.length; iB++) {
					const temp: IRGB = {
						red: channelRange[iR],
						green: channelRange[iG],
						blue: channelRange[iB],
					};

					allColours.push(temp);
				}
			}
		}

		console.log(allColours);

		const allPixels: IPixel[] = [];

		for (let i = 0; i < this.imgDim.height * this.imgDim.width; i++) {
			allPixels.push({
				coord: allCoords[i],
				rgb: allColours[i],
				dim: {
					width: this.pixelDim.width,
					height: this.pixelDim.height,
				},
			});
		}

		return allPixels;
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
