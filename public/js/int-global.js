$(function(){
	$('.btn-settings').on('click', function(){
		if($('.settings-tooltip').hasClass('active')){
			$('.settings-tooltip').removeClass('active');
		} else {
			$('.settings-tooltip').addClass('active');
		}
	});
});