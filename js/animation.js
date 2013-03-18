define(['jquery'], function($){
  /* 
   * On load: animacao com a altura do container e da location.
   * Animo tambem um helper para indicar o sitio para se escrever
   * o nome da cidade, e faco fade in do input-text.
   */ 
  var onload = function(){
    setTimeout(function(){
        $('.container').animate({height: '225px'}, 800);
        $('.location').animate({height: '225px'}, 800, function(){
            $(this).css('padding','25px 20px');
            $('input[name=place]').fadeIn('fast');
            $('input[name=place]').select();

            // helper animation
            $('.tiptypecity').show();
            $('.tiptypecitycontainer').animate({left: '-120px'}, 500);
            $('.tiptypecityarrow').animate({left: '-38px'}, 500);
        });
<<<<<<< HEAD
=======

        $('.credits').animate({opacity: '0.5', bottom: '20px'}, 1000);
>>>>>>> gh-pages
    }, 50);
  };

  var onsubmit = function(){
  	$('.preloader').show('fast');
    $('.container').animate({width: '500px'}, { queue: false, duration: 500 });
    console.log('bla');
    $('.weatherresult').animate({opacity: 1, width: '250px'}, { queue: false, duration: 500 });
  };

  return {
  	onload: onload,
  	onsubmit: onsubmit
  }
});