import * as React from "react";

// Css
import styles from "./assets/css/App.module.css";

// Components
import DrawingCanvas from "./components/DrawingCanvas.Component";
import Toolbar from "./components/Toolbar.Component";

// Interfaces
import IDimension from "./domain/interfaces/IDimension";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	// States
	const [imgDim, setImgDim] = React.useState<IDimension>({
		width: 256,
		height: 128,
	});
	const [pixelDim, setPixelDim] = React.useState<number>(1);

	// Handlers
	const handleImgDimChange = (val: IDimension): void => {
		setImgDim(val);
	};

	const handlePixelDimChange = (val: number): void => {
		setPixelDim(val);
	};

	return (
		<div className={styles.container}>
			<Toolbar
				onImgDimChange={handleImgDimChange}
				imgDim={imgDim}
				onPixelDimChange={handlePixelDimChange}
				pixelDim={pixelDim}
			/>
			<div className={styles.canvasContainer}>
				<DrawingCanvas imgDim={imgDim} pixelDim={pixelDim} />
			</div>
		</div>
	);
};

export default App;
