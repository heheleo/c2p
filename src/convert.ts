import type { ISizeCalculationResult } from "image-size/dist/types/interface";
import { compressWithZlib, getFooter, getHeader, transformImage } from "./util";
import path from "node:path";

export async function convert(filePath: string, dimensions: ISizeCalculationResult) {
	// Save file as the same filename with different extension
	const savePath = path.format({ ...path.parse(filePath), base: '', ext: '.c2p' });
	
	const transformed = await transformImage(filePath);
	const compressed = await compressWithZlib(transformed);
	const header = getHeader(compressed.length, dimensions.width!, dimensions.height!);
	const footer = getFooter();

	const finalFile = Buffer.alloc(header.length + compressed.length + footer.length);
	finalFile.set(header, 0);
	finalFile.set(compressed, header.length);
	finalFile.set(footer, header.length + compressed.length);

	console.log(`Overriding ${savePath}...`);
	return Bun.write(savePath, finalFile);
}