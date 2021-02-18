import ICoord from "./ICoord";
import IDimension from "./IDimension";
import IRGB from "./IRGB";

export default interface IPixel {
	dim: IDimension;
	coordinate: ICoord;
	rgb: IRGB;
}
