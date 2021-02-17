import ICoord from "./ICoord";
import IDimension from "./IDimension";
import IRGB from "./IRGB";

export default interface IPixel {
	dim: IDimension;
	coord: ICoord;
	rgb: IRGB;
}
