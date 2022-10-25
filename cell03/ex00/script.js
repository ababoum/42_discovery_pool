function button_clicked() {
	const color_r = Math.random() * 255;
	const color_g = Math.random() * 255;
	const color_b = Math.random() * 255;

	document.body.style.backgroundColor = 
		"rgb(" + color_r + "," + color_g + "," + color_b +")"; 
}