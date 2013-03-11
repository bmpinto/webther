define(['jquery'], function($){
  
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
          
      $('.preloader').hide('fast');
           
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
            '<img src="img/cloud.png" class="imgcondition">'
          ).fadeIn(500);
      });
    };

  return {
  	populateSelect: populateSelect,
  	renderWeatherInfo: renderWeatherInfo
  }
});