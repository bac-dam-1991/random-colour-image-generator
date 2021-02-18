import * as React from "react";

// Css
import styles from "../assets/css/App.module.css";

// Classes
import ImageGenerator from "../domain/classes/ImageGenerator";

// Interfaces
import IDimension from "../domain/interfaces/IDimension";

// Utility
import { findDimensionsOf } from "../utility/utility";
import Select from "./Select.Component";
import Slider from "./Slider.Component";

export interface ToolbarProps {
	onImgDimChange: (val: IDimension) => void;
	imgDim: IDimension;
	onPixelDimChange: (val: number) => void;
	pixelDim: number;
}

const Toolbar: React.FC<ToolbarProps> = ({
	onImgDimChange,
	imgDim,
	onPixelDimChange,
	pixelDim,
}) => {
	// States
	const [dimensions, setDimensions] = React.useState<IDimension[]>([]);

	// Callbacks
	const findDimensions = React.useCallback((): IDimension[] => {
		return findDimensionsOf(ImageGenerator.MAX_COLOURS);
	}, []);

	React.useEffect(() => {
		setDimensions(findDimensions());
	}, [findDimensions]);

	// Handlers
	const handleSelectionChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedDim: IDimension = JSON.parse(
			event.target.value
		) as IDimension;
		onImgDimChange(selectedDim);
	};

	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onPixelDimChange(parseInt(event.target.value));
	};

	return (
		<div className={styles.toolbar}>
			<Select
				value={JSON.stringify(imgDim)}
				onChange={handleSelectionChange}
				label="Image dimension"
			>
				{dimensions.map((dim: IDimension) => (
					<option
						key={JSON.stringify(dim)}
						value={JSON.stringify(dim)}
					>{`${dim.width}px x ${dim.height}px`}</option>
				))}
			</Select>
			<Slider
				value={pixelDim}
				label={`Zoom: ${pixelDim}.0x`}
				onChange={handleSliderChange}
			/>
		</div>
	);
};

export default Toolbar;
