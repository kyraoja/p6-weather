// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!

  $('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      // Get & store currently
      var currently = weather.currently;
      var code = '<img src=' + weather.image + '>';
      var temp = weather.temp + '&deg;' + weather.units.temp;
      
      // Output to hooks in HTML
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').html(city);
      $('.currently').html(currently);
      

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});




