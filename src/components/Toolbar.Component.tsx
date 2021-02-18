import * as React from "react";

// Css
import styles from "../assets/css/App.module.css";

// Classes
import ImageGenerator from "../domain/classes/ImageGenerator";

// Enums
import { StylePresets } from "../domain/enums/StylePreset";

// Interfaces
import IDimension from "../domain/interfaces/IDimension";

// Utility
import { findDimensionsOf } from "../utility/utility";

// Components
import Select from "./Select.Component";
import Slider from "./Slider.Component";

export interface ToolbarProps {
	onImgDimChange: (val: IDimension) => void;
	imgDim: IDimension;
	onPixelDimChange: (val: number) => void;
	pixelDim: number;
	stylePreset: string;
	onStyleChange: (val: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
	onImgDimChange,
	imgDim,
	onPixelDimChange,
	pixelDim,
	stylePreset,
	onStyleChange,
}) => {
	// States
	const [dimensions, setDimensions] = React.useState<IDimension[]>([]);

	// Callbacks
	const findDimensions = React.useCallback((): IDimension[] => {
		return findDimensionsOf(ImageGenerator.MAX_COLOURS);
	}, []);

	React.useEffect(() => {
		setDimensions(
			findDimensions().filter(
				(item: IDimension) => item.width > 16 && item.height > 16
			)
		);
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

	const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onStyleChange(event.target.value);
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
			<Select
				value={stylePreset}
				onChange={handleStyleChange}
				label="Style presets"
			>
				{StylePresets.map((preset: string) => (
					<option key={preset} value={preset}>
						{preset
							.replace(new RegExp("_", "g"), " ")
							.toLowerCase()}
					</option>
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
