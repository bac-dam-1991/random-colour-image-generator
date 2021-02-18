enum StylePreset {
	DEFAULT,
	AURORA_BOREALIS,
	UNDER_PRESSURE,
	RED_SKY_AT_NIGHT,
	RED_SEA_RISING,
	PHOTON_SIGNALS,
	PULSING_DESIRE,
}

export const StylePresets: string[] = Object.values(StylePreset).filter(
	(item: string | StylePreset) => typeof item === "string"
) as string[];

export default StylePreset;
