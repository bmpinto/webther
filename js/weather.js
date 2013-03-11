define(['jquery', 'dom'], function($, dom){

  var placeInfo = {};

  /*
   * Funcao que com base na cidade introduzida vai buscar
   * a temperatura e o estado do tempo, atraves da API do Yahoo.
   */
  var getData = function(obj) {
      // Queries para ir buscar dados da cidade introduzida.
      var BASE_URL        = 'http://query.yahooapis.com/v1/public/yql?q=';
      var query_geoplace  = 'select * from geo.places where text = "' + obj.city + '"';

      /*
       * Verifica se query 'a cidade introduzida, devolveu dados.
       * Caso tenha devolvido:
       *    - Um array: vai buscar informacao da primeira posicao
       *        FUTURAMENTE: PREENCHER UM SELECT COM
       *        OS RESTANTES RESULTADOS PRESENTES NO ARRAY
       *
       *    - Um resultado: apresenta o resultado no ecran
       */

        $.getJSON(BASE_URL + encodeURI(query_geoplace) + '&format=json', function(data){

          if( data.query.count === 0 ) {
            // MELHORAR A SITUACAO DE ERRO 
            // NAO EXISTE A CIDADE QUE O USER INTRODUZIU
            $('.weatherresult').html('<p class="error">Y U NO STOP MAKING CITIEZ UP</p>');
            $('.cityresult').html('');
            $('.countryresult').html('');
            return;
          }
          
          var woeid = dom.populateSelect(data, placeInfo);
          
          var query_weather = 'select * from weather.forecast where woeid='+ woeid +' and u="c"';
          $.getJSON(BASE_URL + encodeURI(query_weather) + '&format=json', function(data){
              placeInfo.condition   = data.query.results.channel.item.condition.text;
              placeInfo.temperature = data.query.results.channel.item.condition.temp;

              console.log(data);
              dom.renderWeatherInfo(placeInfo);
          });
      });
    };

    return{
      getData: getData
    };
});	