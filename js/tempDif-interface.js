var apiKey = require(.'/../.env').apiKey;
var TempInterface = require(./temp-interface.js);

$(document).ready(function(){
  $('#weatherDifference').click(function(){
    var city1 = $('#city1').val();
    var city2 = $('#city2').val();
    $('#city1').val("");
    $('#city2').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=' + apiKey)
      .then( function(response1){
        var temp1 = cToF(response1.main.temp);
      })
      .then($.get('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + '&appid=' + apiKey))
      .then(function(response2) {
        var temp2 = cToF(response2.main.temp);
      })
      .then(
      var dif = temp1 - temp2;
      console.log(dif);
      $('.showWeather').text("the difference is " + dif );
    }).fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
