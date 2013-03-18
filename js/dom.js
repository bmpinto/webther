<<<<<<< HEAD
define(['jquery'], function($){
=======
define(['jquery', 'error'], function($, error){
>>>>>>> gh-pages
  
    var populateSelect = function(data, placeInfo){
      console.log(data);
      var woeid, place = data.query.results.place;
      if ( $.isArray( place ) ){
        woeid = place[0].woeid;
        placeInfo.city = place[0].name;
        placeInfo.country = place[0].country.content;
        for( i = 0; i < place.length; i++ ){
          if( place[i].admin1 && place[i].admin1.content !== place[i].name ){
            console.log(place[i].name + ', ' + place[i].admin1.content + ', ' + place[i].country.content);
          } else {
            console.log(place[i].name + ', ' + place[i].country.content);
          }
        } 
      } else {
        woeid = data.query.results.place.woeid;
        placeInfo.city = data.query.results.place.name;
        placeInfo.country = data.query.results.place.country.content;
      }

      return woeid;
    };
    
    

    var renderWeatherInfo = function(placeInfo){
<<<<<<< HEAD
          
      $('.preloader').hide('fast');
=======
      var src = setWeatherImage(placeInfo.conditionCode);
      $('.preloader').hide('fast');
      console.log(placeInfo.conditionCode)
>>>>>>> gh-pages
           
      $('.cityresult').fadeOut(function(){
        $(this).html(
            '<p class="cityname">' + placeInfo.city + '</p>' +
            '<p class="country">' + placeInfo.country + '</p>'
          ).fadeIn(500);
      });
   
      $('.weatherresult').fadeOut(function(){
        $(this).html(
            '<p class="temperature">' + placeInfo.temperature + '</p>' +
            '<p class="condition">' + placeInfo.condition + '</p>' +
<<<<<<< HEAD
            '<img src="img/cloud.png" class="imgcondition">'
=======
            '<section class="weatherImage"><img src="img/' + src + '.png" class="imgcondition"></section>'
>>>>>>> gh-pages
          ).fadeIn(500);
      });
    };

<<<<<<< HEAD
=======

    /*
     * Recebe como parametro um codigo, correspondente a um
     * estado de tempo (0-50). No switch, os casos que são mais recorrentes
     * aparecem em primeiro. Assim são precisas menos verificações
     * até chegar ao caso pretendido. Melhora em termos de performance
     */
    var setWeatherImage = function(condition){
      switch( condition ){
        case 3200: throw('no weather info');

        case 32: case 34: case 36: return 'sun'; break;

        case 30: case 44: return 'partly-cloudy'; break;
        
        case 29: return 'partly-cloudy-night'; break;

        case 26: case 27: case 28: return 'cloud'; break;

        case 31: case 33: return 'moon'; break;

        case 8 : case 9 : return 'drizzle'; break;

        case 3 : case 4 : case 37: case 38: case 39: case 45: case 47: return 'thunderstorm'; break;

        case 5 : case 6 : case 7 : case 18: return 'rain-sleet'; break;

        case 10: case 11: case 12: return 'rain'; break;

        case 17: case 35: return 'hail'; break;

        case 19: case 20: case 21: case 22: return 'fog'; break;

        case 13: case 14: case 15: case 16: return 'snow'; break;

        case 23: case 24: return 'wind'; break;

        case 25: return 'cold'; break;
        
        case 40: case 41: case 42: case 43: case 46: return 'snow-heavy'; break;

        case 0 : case 2 : return 'tornado'; break;

        case 1 : return 'tropical'; break;
      }
    }

>>>>>>> gh-pages
  return {
  	populateSelect: populateSelect,
  	renderWeatherInfo: renderWeatherInfo
  }
<<<<<<< HEAD
});
=======
});


/* LISTA IMAGENS E CODIGOS

0 tornado  // TORNADO.PNG
2 hurricane

1 tropical storm // TROPICAL.PNG

3 severe thunderstorms 
4 thunderstorms
37  isolated thunderstorms
38  scattered thunderstorms // THUNDERSTORM.PNG
39  scattered thunderstorms
45  thundershowers
47  isolated thundershowers

5 mixed rain and snow
6 mixed rain and sleet  // RAIN-SLEET.PNG
7 mixed snow and sleet
18  sleet

8 freezing drizzle  // DRIZZLE.PNG
9 drizzle

10  freezing rain  
11  showers  // RAIN.PNG
12  showers

13  snow flurries
14  light snow showers  // SNOW.PNG
15  blowing snow
16  snow

17  hail  // HAIL.PNG
35  mixed rain and hail

19  dust
20  foggy  // FOG.PNG
21  haze
22  smoky

23  blustery  // WIND.PNG
24  windy

25  cold  // COLD.PNG

26  cloudy
27  mostly cloudy (night)
28  mostly cloudy (day)  // CLOUD.PNG

29  partly cloudy (night) // PARTLY-CLOUDY-NIGHT.PNG

30  partly cloudy (day) // PARTLY-CLOUDY.PNG
44  partly cloudy

31  clear (night)  // MOON.PNG
33  fair (night)

32  sunny
34  fair (day)  // SUN.PNG
36  hot

40  scattered showers
41  heavy snow
42  scattered snow showers  // SNOW-HEAVY.PNG
46  snow showers
43  heavy snow

3200  not available
*/
>>>>>>> gh-pages
