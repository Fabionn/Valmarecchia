$(function () {

	$(".menu1").on("click", function (e){
		e.preventDefault();
		$(".menu1, .menu2, .menu3, .menu4").hide();
		$(".menu-stagioni, .menu-indietro").show();
	});
	$(".menu-indietro").on("click", function (e){
		e.preventDefault();
		$(".menu-stagioni, .menu-indietro").hide();
		$(".menu1, .menu2, .menu3, .menu4").show();
	});

	$(".menu2").on("click", function (e){
		e.preventDefault();
		$(".menu1, .menu2, .menu3, .menu4").hide();
		$(".menu-prodotti, .menu-indietro").show();
	});
	$(".menu-indietro").on("click", function (e){
		e.preventDefault();
		$(".menu-prodotti, .menu-indietro").hide();
		$(".menu1, .menu2, .menu3, .menu4").show();
	});

	$(".menu3").on("click", function (e){
		e.preventDefault();
		$(".menu1, .menu2, .menu3, .menu4").hide();
		$(".menu-comuni, .menu-indietro").show();
	});
	$(".menu-indietro").on("click", function (e){
		e.preventDefault();
		$(".menu-comuni, .menu-indietro").hide();
		$(".menu1, .menu2, .menu3, .menu4").show();
	});

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
