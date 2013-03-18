define(['jquery'], function($){
	var message = function(msg){
		$('.preloader').hide('fast');

		$('.weatherresult').fadeOut(function(){
	        $(this).html(
	            '<p class="condition">'+ msg +'</p>' +
	            '<section class="weatherImage"><img src="img/cloud.png" class="imgcondition"></section>'
	          ).fadeIn(500);
	    });

        $('.cityresult').html('');
        $('.countryresult').html('');
	};

	return{
		message: message
	};
});