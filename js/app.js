define(['jquery',  'underscore', 'getData', 'debounce'], function($, _, getData){

  var initialize = function(){
    window.templatehtml     = $('#weatherTemplate').html();
    window.compiledtemplate = _.template(templatehtml);
    render();
    
  };

  var render = function(){
    $('input[name=place]').keyup( $.debounce( 1000, debouncedSubmit ) );

    $('#city').on('submit', function(e){
        e.preventDefault();

        var city = $('input[name=place]').val();
        if ( !city ) return;

        $('#result').html('<img src="img/ajax-loader.gif" />');
        getData.getWeatherData({ city: city, container: $('#result') });
    });
  };

  var debouncedSubmit = function(){
    $('#city').submit();
  };

  return {
    initialize: initialize
  };
});