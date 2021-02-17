import * as React from "react";

// Css
import styles from "../assets/css/App.module.css";

// Utility
import { generateRgbString } from "../utility/utility";

export interface DrawingCanvasProps {}

const DrawingCanvas: React.FC<DrawingCanvasProps> = () => {
	// States
	const [height, setHeight] = React.useState<number>(128);
	const [width, setWidth] = React.useState<number>(256);
	const [pixelDim, setPixelDim] = React.useState<number>(50);

	// Hooks
	const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

	const draw = React.useCallback((context: CanvasRenderingContext2D) => {
		context.fillStyle = generateRgbString({
			red: 125,
			green: 124,
			blue: 56,
		});
		context.fillRect(0, 0, pixelDim, pixelDim);
	}, []);

	// Effects
	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext("2d") as CanvasRenderingContext2D;
			draw(context);
		}
	}, []);

	return (
		<canvas
			ref={canvasRef}
			id="my-masterpiece"
			className={styles.canvas}
			style={{ height, width }}
		/>
	);
};

export default DrawingCanvas;
