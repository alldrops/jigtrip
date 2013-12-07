$(function() {
	$('.scrollpaneSmallBlack').jScrollPane();

	$('.scrollpaneBigBlack').jScrollPane();

	$('.scrollpaneMediumBlack').jScrollPane();
});


//ACOES
$('.adicionarConexao').on('click', function(event) {

	event.preventDefault();
	
	$('.light-box-dados').addClass('zindex1');
	$('.box-pop').addClass('zindex2');

	setTimeout(function() {
		$('.light-box-dados').stop().animate({
			opacity: 1
		});
		$('.box-pop').stop().animate({
			opacity: 1
		});
	},500);
});

$('.light-box-dados , .fechar-pop').on('click', function(event) {

	event.preventDefault();

	$('.light-box-dados').stop().animate({
		opacity: 0
	},200);

	$('.box-pop').stop().animate({
		opacity: 0
	},200);

	$('.light-box-dados').removeClass('zindex1');
	$('.box-pop').removeClass('zindex2');
});

$('.user-info-button.btn-message , .btn-nova-mensagem').on('click', function(event) {

	event.preventDefault();

	$('.light-box-dados').addClass('zindex1');
	$('.box-pop2').addClass('zindex2');

	setTimeout(function() {
		$('.light-box-dados').stop().animate({
			opacity: 1
		});
		$('.box-pop2').stop().animate({
			opacity: 1
		});
	},500);
});

$('.light-box-dados , .fechar-pop2').on('click', function(event) {

	event.preventDefault();

	$('.light-box-dados').stop().animate({
		opacity: 0
	},200);

	$('.box-pop2').stop().animate({
		opacity: 0
	},200);

	$('.light-box-dados').removeClass('zindex1');
	$('.box-pop2').removeClass('zindex2');
});