$(function () {
	$(".hotpoint-1, .hotpoint-2").on("click", function (e) {
		e.preventDefault();

		$(".box").hide();

		var box = $(this).data("box");

		var hotpointOffset = $(this).offset();

		var hotpointWidth = $(this).width();

		var boxHeight = $("." + box).height();
		var boxTop = hotpointOffset.top - boxHeight - 10;
		var boxLeft = hotpointOffset.left + hotpointWidth + 10;

		$("." + box).css("top", boxTop);
		$("." + box).css("left", boxLeft);

		$("." + box).show();
	});

	$(".close-box").on("click", function (e) {
		e.preventDefault();

		$(this).parents(".box").hide();
	});

	$(".mappa").on("click", function (e) {
		e.preventDefault();

		$(".box").hide();
	});
});
