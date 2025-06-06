import { toPng, toJpeg, toSvg } from "html-to-image";
import fileSaver from "file-saver";
const { saveAs } = fileSaver;

const errorExportIcon = "i-lucide-alert-triangle";
const generatedTextFileName = "generated_text_p5";

export const exportImage = (target: Element, imageType: string) => {
	console.log(`Exporting as ${imageType}`);

	const toast = useToast();

	const errorReporter = (error: Error) => {
		console.error("Error exporting image: ", error);
		toast.add({
			title: "Failed to export image",
			icon: errorExportIcon,
			color: "error",
		});
	};

	const successReporter = () => {
		toast.add({
			title: "Image exported successfully",
			icon: "i-lucide-check-circle",
			color: "success",
		});
	};

	const downloadImage = (uri: string, fileName: string) => {
		if (window.saveAs !== undefined) {
			window.saveAs(uri, fileName);
		} else {
			saveAs(uri, fileName);
		}
	};

	const targetElement = target as HTMLElement;

	switch (imageType) {
		case "png":
			toPng(targetElement, { quality: 1 })
				.then((pngUri: string) => {
					downloadImage(pngUri, `${generatedTextFileName}.png`);
					successReporter();
				})
				.catch(errorReporter);
			break;
		case "jpeg":
			toJpeg(targetElement, { quality: 1 })
				.then((jpegUri: string) => {
					downloadImage(jpegUri, `${generatedTextFileName}.jpeg`);
					successReporter();
				})
				.catch(errorReporter);
			break;
		case "svg":
			toSvg(targetElement)
				.then((svgUri: string) => {
					saveAs(svgUri, `${generatedTextFileName}.svg`);
					successReporter();
				})
				.catch(errorReporter);
			break;
		default:
			console.error(`Unsupported image type: ${imageType}`);
			toast.add({
				title: "Error",
				description:
					"Unsupported image type, select a valid one from the menu",
				icon: errorExportIcon,
				color: "error",
			});
	}
};
