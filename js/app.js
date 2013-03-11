define(['jquery', 'animation', 'weather'], function($, animation, weather){

  var initialize = function(){
    animation.onload();
    render();
  };

  

  /*
   * On submit: 
   *   - Se existir uma cidade digitada:
   *   - Mostra o preloader
   *   - Expande o container e a div para aparecer temperatura e estado 
   *   - Envia para processamento o nome da cidade e a div
   *     onde vai ser mostrado o resultado.
   */
  var render = function(){
    $('#cityform').on('submit', function(e){
        e.preventDefault();
        
        var city = $('input[name=place]').val();
        // PROCESS ERROR!!!!
        if ( !city ) return;

        animation.onsubmit();
        weather.getData({ city: city });
    });
  };

  return {
    initialize: initialize
  };
});