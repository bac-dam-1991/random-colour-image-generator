// Interfaces

import { generateNumberArrayBetween } from "../../utility/utility";

// Interfaces
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
	private readonly imgSize: number;
	private readonly preset: string;

	constructor(imgDim: IDimension, pixelDim: IDimension, preset: string) {
		this.imgDim = imgDim;
		this.pixelDim = pixelDim;
		this.imgSize = imgDim.width * imgDim.height;
		this.preset = preset;
	}

	// static helper methods
	public static stylise(spectrum: IRGB[], preset: string): IRGB[] {
		switch (preset) {
			case "AURORA_BOREALIS":
				return spectrum.sort((a: IRGB, b: IRGB) => {
					if (a.red > b.red) return 1;
					if (a.green < b.green || a.blue < b.blue) return -1;
					return 0;
				});
			case "RED_SKY_AT_NIGHT":
				return spectrum.sort((a: IRGB, b: IRGB) => {
					if (a.red > b.green) return 1;
					if (a.green < b.green || a.blue < b.blue) return -1;
					return 0;
				});
			case "RED_SEA_RISING":
				return spectrum.sort((a: IRGB, b: IRGB) => {
					if (a.red > b.blue && a.red > a.green) return 1;
					if (a.green > b.red || a.blue > b.red) return -1;
					return 0;
				});
			case "PHOTON_SIGNALS":
				return spectrum.sort((a: IRGB, b: IRGB) => {
					if (a.red > b.red) return 1;
					if (a.green < b.blue && a.green > b.red) return -1;
					return 0;
				});
			case "PULSING_DESIRE":
				return spectrum.sort((a: IRGB, b: IRGB) => {
					if (a.red > b.red) return 1;
					if (a.green > b.red && a.blue > b.red) return -1;
					return 0;
				});
			case "UNDER_PRESSURE":
				return spectrum.sort((a: IRGB, b: IRGB) => {
					if (a.red < b.red) return 1;
					if (a.green > b.blue && a.blue > b.red) return -1;
					return 0;
				});
			default:
				return spectrum;
		}
	}

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

	public assignCoordToPixel(
		coordinates: ICoord[],
		spectrum: IRGB[]
	): IPixel[] {
		const pixels: IPixel[] = [];

		for (let i = 0; i < this.imgSize; i++) {
			pixels.push({
				coordinate: coordinates[i],
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
		return this.assignCoordToPixel(
			coords,
			ImageGenerator.stylise(spectrum, this.preset)
		);
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
