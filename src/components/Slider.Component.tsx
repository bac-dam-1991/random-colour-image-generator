import * as React from "react";

// Styles
import styles from "../assets/css/Slider.module.css";
import appStyles from "../assets/css/App.module.css";

export interface SliderProps extends React.HTMLAttributes<HTMLInputElement> {
	value: number;
	label: string;
}

const Slider: React.FC<SliderProps> = ({ onChange, value, label }) => {
	return (
		<div className={styles.sliderContainer}>
			<label className={appStyles.label}>{label}</label>
			<input
				type="range"
				min="1"
				max="20"
				defaultValue={value}
				onChange={onChange}
				className={styles.slider}
				id="pixelSlider"
			/>
		</div>
	);
};

export default Slider;
