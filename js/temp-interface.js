var apiKey = require('./../.env').apiKey;

var kToC = function(number){
  var celsius = number - 273.15;
  return parseFloat(celsius).toFixed(2);
}

var cToF = function(number){
  var celsius = number - 273.15;
  var faren = (celsius * 9)/5 + 32;
  return parseFloat(faren).toFixed(2);
}

$(document).ready(function(){
  $('#temperatureLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var temp = response.main.temp;
      console.log(response);
      $('.showWeather').text("The humidity in " + city + " is " + temp + " degrees Kelvin, and " + kToC(temp) + " degrees Celsius and " + cToF(temp) + "degrees Farenheit." );
    }).fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
