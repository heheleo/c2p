import { program } from "commander";
import { version } from "../package.json";
import { validateImage } from "./util";
import { convert } from "./convert";

program
	.name("c2p")
	.description(
		"Converts regular images into c2p format, used for the CASIO ClassPad."
	)
	.version(version);

program
	.command("convert")
	.description("Converts an image into the c2p format.")
	.argument("<string>", "path to image")
	.action(async (str) => {
		const validate = await validateImage(str);
		if(!validate) return;
		convert(str, validate);
	});

program
	.command("verify")
	.description("Verify if an image can be converted into the c2p format.")
	.argument("<string>", "path to image")
	.action(async (str) => {
		const validate = await validateImage(str);
		if(!validate) return;
		console.log("The image is ready to be converted.");
	});

program.parse();
