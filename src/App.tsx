import * as React from "react";

// Css
import styles from "./assets/css/App.module.css";

// Components
import DrawingCanvas from "./components/DrawingCanvas";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div className={styles.container}>
			<DrawingCanvas />
		</div>
	);
};

export default App;
