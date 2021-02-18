// Interfaces
import { generateNumberArrayBetween } from "../../utility/utility";
import ICoord from "../interfaces/ICoord";
import IDimension from "../interfaces/IDimension";
import IPixel from "../interfaces/IPixel";
import IRGB from "../interfaces/IRGB";

export default class ImageGenerator {
	// static members
	public static MAX_COLOURS: number = 32768;
	public static DEFAULT_STEP: number = 8;
	public static MAX_BIT: number = 256;

	// private members
	private imgDim: IDimension;
	private pixelDim: IDimension;
	private imgSize: number;

	constructor(imgDim: IDimension, pixelDim: IDimension) {
		this.imgDim = imgDim;
		this.pixelDim = pixelDim;
		this.imgSize = imgDim.width * imgDim.height;
	}

	// static helper methods
	public static generateColourSpectrum(): IRGB[] {
		const spectrum: IRGB[] = [];

		const channelRange: number[] = generateNumberArrayBetween(
			0,
			ImageGenerator.MAX_BIT,
			ImageGenerator.DEFAULT_STEP,
			"upperOnly"
		);

		for (let iR = 0; iR < channelRange.length; iR++) {
			for (let iG = 0; iG < channelRange.length; iG++) {
				for (let iB = 0; iB < channelRange.length; iB++) {
					const temp: IRGB = {
						red: channelRange[iR],
						green: channelRange[iG],
						blue: channelRange[iB],
					};

					spectrum.push(temp);
				}
			}
		}

		return spectrum;
	}

	// public methods
	public generatePixelCoords(): ICoord[] {
		const coords: ICoord[] = [];

		for (let i = 0; i < this.imgSize; i++) {
			const currentCoord: ICoord = {
				x: (i % this.imgDim.width) * this.pixelDim.width,
				y: Math.floor(i / this.imgDim.width) * this.pixelDim.height,
			};

			coords.push(currentCoord);
		}

		return coords;
	}

	public assignCoordToPixel(coords: ICoord[], spectrum: IRGB[]): IPixel[] {
		const pixels: IPixel[] = [];

		for (let i = 0; i < this.imgSize; i++) {
			pixels.push({
				coord: coords[i],
				rgb: spectrum[i],
				dim: {
					width: this.pixelDim.width,
					height: this.pixelDim.height,
				},
			});
		}

		return pixels;
	}

	public generate(): IPixel[] {
		const coords: ICoord[] = this.generatePixelCoords();
		const spectrum: IRGB[] = ImageGenerator.generateColourSpectrum();
		return this.assignCoordToPixel(coords, spectrum);
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

	public getImgSize(): number {
		return this.imgSize;
	}
}
