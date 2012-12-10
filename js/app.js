define(['jquery',  'underscore', 'getData'], function($, _, getData){

  var initialize = function(){
    window.templatehtml     = $('#weatherTemplate').html();
    window.compiledtemplate = _.template(templatehtml);
    $('#city input[type=text]').select();
    render();
  };

  var render = function(){
    $('#city').on('submit', function(e){
        e.preventDefault();

        var city = $('input[name=place]').val();
        if ( !city ) return;

        $('#result').html('<img src="img/ajax-loader.gif" />');
        getData.getWeatherData({ city: city, container: $('#result') });
    });
  };

  return {
    initialize: initialize
  };
});