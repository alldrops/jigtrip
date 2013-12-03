$(function(){

    $('.external-wrapper').css({'height':$(window).height()});

    $(window).resize(function() {
    	$('.external-wrapper').css({'height': $(window).height()});
    });

});