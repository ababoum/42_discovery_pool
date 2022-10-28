$(document).ready(() => {

	$("#default_container").show();
	$("#mriant_container").hide();
	$("#mababou_container").hide();


	$("#gotocv1").click(() => {
		$("#default_container").hide();
		$("#mriant_container").show();
		$("#mababou_container").hide();
	})

	$("#gotocv2").click(() => {
		$("#default_container").hide();
		$("#mriant_container").hide();
		$("#mababou_container").show();
	})

	$("#gotohome1").click(() => {
		$("#default_container").show();
		$("#mriant_container").hide();
		$("#mababou_container").hide();
	})

	$("#gotohome2").click(() => {
		$("#default_container").show();
		$("#mriant_container").hide();
		$("#mababou_container").hide();
	})

})