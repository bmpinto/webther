define(['jquery'], function($){
  var getWeatherData = function(obj) {
      var BASE_URL        = 'http://query.yahooapis.com/v1/public/yql?q=';
      var query_geoplace  = 'select * from geo.places where text = "' + obj.city + '"';
      
      $.getJSON(BASE_URL + encodeURI(query_geoplace) + '&format=json', function(data){
          
          if( data.query.count === 0 ) {
            $(obj.container.selector).html('<p class="error">Y U NO STOP MAKING CITIEZ UP</p>');
            return;
          }

          var woeid;
          if ( $.isArray( data.query.results.place ) ){
            woeid = data.query.results.place[0].woeid;
          } else {
            woeid = data.query.results.place.woeid;
          }
          
          var query_weather = 'select * from weather.forecast where woeid='+ woeid +' and u="c"';
          $.getJSON(BASE_URL + encodeURI(query_weather) + '&format=json', function(data){
              var estado      = data.query.results.channel.item.condition.text;
              var temperatura = data.query.results.channel.item.condition.temp;

              $(obj.container.selector).fadeOut(function(){
                  $(this).html( compiledtemplate({ temperatura: temperatura, estado: estado }) ).fadeIn();
              });
          });
      });
    };

    return{
      getWeatherData: getWeatherData
    };
});	