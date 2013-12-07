$(function() {
	$('.prefer-conversa').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')) {
			$('.prefer-conversa').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.prefer-cigarro').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')) {
			$('.prefer-cigarro').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.prefer-musica').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')) {
			$('.prefer-musica').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.prefer-animais').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')) {
			$('.prefer-animais').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.box-prefer').on('click', function() {
		$(this).parent().find('input').val($(this).data('valor'));
	})
});