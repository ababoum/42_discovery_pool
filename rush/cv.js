$(document).ready(() => {

	$("#default_container").fadeIn();
	$("#mriant_container").fadeOut();
	$("#mababou_container").fadeOut();


	$("#gotocv1").click(() => {
		$("#default_container").fadeOut();
		$("#mriant_container").fadeIn();
		$("#mababou_container").fadeOut();
	})

	$("#gotocv2").click(() => {
		$("#default_container").fadeOut();
		$("#mriant_container").fadeOut();
		$("#mababou_container").fadeIn();
	})

	$("#gotohome1").click(() => {
		$("#default_container").fadeIn();
		$("#mriant_container").fadeOut();
		$("#mababou_container").fadeOut();
	})

	$("#gotohome2").click(() => {
		$("#default_container").fadeIn();
		$("#mriant_container").fadeOut();
		$("#mababou_container").fadeOut();
	})

})