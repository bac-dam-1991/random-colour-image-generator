import * as React from "react";

// Css
import styles from "../assets/css/App.module.css";
import ImageGenerator from "../domain/classes/ImageGenerator";
import IPixel from "../domain/interfaces/IPixel";

// Utility
import { generateRgbString } from "../utility/utility";

export interface DrawingCanvasProps {}

const DrawingCanvas: React.FC<DrawingCanvasProps> = () => {
	// States
	const [height, setHeight] = React.useState<number>(128);
	const [width, setWidth] = React.useState<number>(256);
	const [pixelDim, setPixelDim] = React.useState<number>(1);

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

			const imgGen = new ImageGenerator(
				{ width: width, height: height },
				{ width: pixelDim, height: pixelDim }
			);

			const image: IPixel[] = imgGen.generate();

			for (let i = 0; i < image.length; i++) {
				draw(context, image[i]);
			}
		}
	}, []);

	return (
		<canvas
			ref={canvasRef}
			id="my-masterpiece"
			height={height}
			width={width}
			className={styles.canvas}
		/>
	);
};

export default DrawingCanvas;
