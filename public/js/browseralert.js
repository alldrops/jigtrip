$(function(){
	//VERIFICAÇÃO IE < 9
	var ua = navigator.userAgent,
		N = navigator.appName, tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || [];

	M = M[2]? [M[1], M[2]]:[N, navigator.appVersion, '-?'];

	if(M[0] === 'MSIE' && M[1] < 9) {
		$('.fundo-atualize-navegador , .box-atalize').fadeIn();
	}

	$('.fundo-atualize-navegador , .fecha-atualiza').on('click', function() {
		$('.fundo-atualize-navegador , .box-atalize').fadeOut();
	});
});
