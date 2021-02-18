import * as React from "react";

// Css
import styles from "../assets/css/App.module.css";

// Classes
import ImageGenerator from "../domain/classes/ImageGenerator";

// Interfaces
import IDimension from "../domain/interfaces/IDimension";
import IPixel from "../domain/interfaces/IPixel";

// Utility
import { generateRgbString } from "../utility/utility";

export interface DrawingCanvasProps {
	imgDim: IDimension;
	pixelDim: number;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ imgDim, pixelDim }) => {
	// Hooks
	const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

	const draw = React.useCallback(
		(context: CanvasRenderingContext2D, { rgb, dim, coord }: IPixel) => {
			context.fillStyle = generateRgbString(rgb);
			context.fillRect(coord.x, coord.y, dim.width, dim.height);
		},
		[]
	);

	// Effects
	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext("2d") as CanvasRenderingContext2D;

			const imgGen = new ImageGenerator(imgDim, {
				width: pixelDim,
				height: pixelDim,
			});

			const image: IPixel[] = imgGen.generate();

			for (let i = 0; i < image.length; i++) {
				draw(context, image[i]);
			}
		}
	}, [imgDim, pixelDim]);

	return (
		<canvas
			ref={canvasRef}
			id="my-masterpiece"
			height={imgDim.height * pixelDim}
			width={imgDim.width * pixelDim}
			className={styles.canvas}
		/>
	);
};

export default DrawingCanvas;
