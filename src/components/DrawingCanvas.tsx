import * as React from "react";

// Css
import styles from "../assets/css/App.module.css";

export interface DrawingCanvasProps {}

const DrawingCanvas: React.FC<DrawingCanvasProps> = () => {
	// States
	const [height, setHeight] = React.useState<number>(128);
	const [width, setWidth] = React.useState<number>(256);
	const [pixelDim, setPixelDim] = React.useState<number>(1);

	// Hooks
	const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

	// Effects
	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext("2d") as CanvasRenderingContext2D;
			context.fillStyle = "#FF00AA";
			context.fillRect(0, 0, pixelDim, pixelDim);
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
