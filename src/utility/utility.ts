import IRGB from "../domain/interfaces/IRGB";

export const generateRgbString = (value: IRGB): string => {
	return `rgb(${value.red}, ${value.green}, ${value.blue})`;
};
