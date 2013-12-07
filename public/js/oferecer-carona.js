$(function() {
	$('.btn-tipo-carona').on('click', function(e){
		e.preventDefault();

		if(!$(this).hasClass('ativo')) {
			$('.btn-tipo-carona').removeClass('ativo');
			$(this).addClass('ativo');
			$('.fields-container').slideDown();
		}

		if($(this).hasClass('btn-ida-volta')) {
			$('.container-volta').slideDown();
		} else {
			$('.container-volta').slideUp();
		}
	});
});