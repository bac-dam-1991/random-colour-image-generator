// Classes
import ImageGenerator from "../domain/classes/ImageGenerator";

// Interfaces
import IRGB from "../domain/interfaces/IRGB";

test("that there are no duplicate colours.", () => {
	const imgGen: IRGB[] = ImageGenerator.generateColourSpectrum();

	function hasDuplicate(): boolean {
		return new Set(imgGen).size === imgGen.length;
	}

	expect(hasDuplicate).toBeTruthy();
});
