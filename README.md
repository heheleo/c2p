# c2p

Converts images to the CASIO Classpad c2p file format, through an easy-to-use CLI.

Ported from [the6p4c's Kalkimg](https://github.com/the6p4c/Kalkimg). I recommend using this instead if you are on Windows. It features an intuitive and graphical user interface.

Original reverse engineering paper of the file format found [here](https://tiplanet.org/modules/archives/downloads2/1406770160/Classpad.c2pimagefileformat.pdf).

## Installation

Prebuilt binary located in `build/c2p`.

Code is ran and compiled using [Bun](https://bun.sh/). The code is written in TypeScript.

## Usage

Use `c2p verify` to verify if an image can be transformed. After, use `c2p convert` to convert the image.

To test the image, use the built-in ClassPad's PicturePlot application. Open the file through `File>Open`. If the image is corrupt, **please open an issue.**

Due to the hassle of transmitting files through a physical ClassPad, it is recommended to try ClassPad emulators that run on your computer. The official emulator is the [ClassPad Manager](https://edu.casio.com/products/classroom/cp2m/).