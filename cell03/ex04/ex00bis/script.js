$(document).ready(function () {

	$("#btn").click(function () {

		const color_r = Math.random() * 255;
		const color_g = Math.random() * 255;
		const color_b = Math.random() * 255;

		const color = "rgb(" + color_r + "," + color_g + "," + color_b + ")";
		$("body").css("background-color", color);
	});

});