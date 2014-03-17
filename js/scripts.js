// 1. Check for Geolocation
// REF: http://codepen.io/fleeting/pen/Idsaj
// Browser support geolocation?  
  if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

// 2. Get Geolocation & return Simple Weather
$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      // Get & store current
      var currently = weather.currently;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.currently').text(currently);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function




//Cheney

  $.simpleWeather({
    
    location: '99004', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.cheney .temp').text(temp);
      $('.cheney .city').text(city);
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });

//Seattle

  $.simpleWeather({
    
    location: '98198', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.seattle .temp').text(temp);
      $('.seattle .city').text(city);
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });





// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
//$(document).ready(function(){

  $(document).on('click', function(){

    var zipcode = $('#getWeather input').val();

	$.simpleWeather({
    
    location: zipcode,
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var temp, tomHi, tomLo, cityAndState; 

      temp = weather.temp + '<span> f</span>';
      tomHi = weather.tomorrow.high;
      tomLo = weather.tomorrow.low;
      cityAndState = weather.city + ' , ' + weather.region;

      console.log(cityAndState);

      // Display Weather
      $('.temp').html(temp);
      $('.tomHi').html(tomHi);
      $('.tomLo').html(tomLo);
      $('.cityAndState').html(cityAndState);

    },
    
    error: function(error) {
      $("#getWeather").html('<p>'+error+'</p>');
    }
  
  });

	console.log('Page Loaded. Lets Do this!');

}); 
