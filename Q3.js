//hex<->rgb converter
const HEXtoRGB = (colorCode) => {
	let R = parseInt(colorCode[1] + colorCode[2], 16);
	let G = parseInt(colorCode[3] + colorCode[4], 16);
	let B = parseInt(colorCode[5] + colorCode[6], 16);

	alert(`The RGB value is: ${R}, ${G}, ${B}`);
}

const RGBtoHEX = (colorCode) => {
	colorCode = colorCode.split(',');

	let R = Number(colorCode[0]).toString(16);
	if(R.length == 1) R = "0" + R;

	let G = Number(colorCode[1]).toString(16);
	if(G.length == 1) G = "0" + G;

	let B = Number(colorCode[2]).toString(16);
	if(B.length == 1) B = "0" + B;

	let hex = "#"+R+G+B;
	alert("The HEX value is: " + hex);
}

let colorCode = prompt("Please Enter a Color Code: ");

if (colorCode[0] == "#") HEXtoRGB(colorCode);
else RGBtoHEX(colorCode);