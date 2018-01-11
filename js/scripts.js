jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('.navbar').addClass('sticky-nav');
            }
            else {
                $('.navbar').removeClass('sticky-nav');
            }
        });
    }());



    // -------------------------------------------------------------
    // mobile menu
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').ucOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'uc-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-along',             // class name
        closeButton    : '#uc-mobile-menu-close-btn',
        menuWrapper    : '.uc-mobile-menu',                 // class name below-pusher
        documentPusher : '.uc-mobile-menu-pusher'
        });
    }());


    // ------------------------------------------------------------------
    // Testimonial Slider
    // ------------------------------------------------------------------
    (function() {
        $('.testimonial').owlCarousel({
            items:2,
            loop: true,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });

        $('.logo-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                600: {
                    items: 4
                },
                768: {
                    items: 6
                }
            }
        });

    }());



    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

        $('body').append('<div id="totop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#totop').fadeIn();
                } else {
                    $('#totop').fadeOut();
                }
            }); 

        $('#totop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());


    // ------------------------------------------------------------------
    // Search Modal
    // ------------------------------------------------------------------

    (function () {
        $('.search-modal,.video-modal').modal({
            backdrop: false,
            show:false
        });

    }());



    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

    (function () {

        if ($('#googleMap').length > 0) {

            //set your google maps parameters
            var $latitude = 51.520337, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $longitude =  -0.079345,
                $map_zoom = 16; /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = 'img/google-map-marker.png';

            //we define here the style of the map
            var style = [{
                "stylers": [{
                    "hue": "#000"
                }, {
                    "saturation": -60
                }, {
                    "gamma": 1.15
                }, {
                    "lightness": -5
                }]
            }];

            //set google map options
            var map_options = {
                center: new google.maps.LatLng($latitude, $longitude),
                zoom: $map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map: map,
                visible: true,
                icon: $marker_url
            });
        }
    }());
	
	/*Timer*/
// set the date we're counting down to
var target_date = new Date("May 25, 2018").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdown");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";  
 
}, 1000);

	/*Gradient*/
	
	
// target to give background to
var $div = document.getElementById("gradient");
// rgb vals of the gradients
var gradients = [
  { start: [128,179,171], stop: [30,41,58] },
  { start: [255,207,160], stop: [234,92,68] },
  { start: [212,121,121], stop: [130,105,151] }
];
// how long for each transition
var transition_time = 4;

// internal type vars
var currentIndex = 0; // where we are in the gradients array
var nextIndex = 1; // what index of the gradients array is next
var steps_count = 0; // steps counter
var steps_total = Math.round(transition_time*60); // total amount of steps
var rgb_steps = {
  start: [0,0,0],
  stop: [0,0,0]
}; // how much to alter each rgb value
var rgb_values = {
  start: [0,0,0],
  stop: [0,0,0]
}; // the current rgb values, gets altered by rgb steps on each interval
var prefixes = ["-webkit-","-moz-","-o-","-ms-",""]; // for looping through adding styles
var div_style = $div.style; // short cut to actually adding styles
var color1, color2;

// sets next current and next index of gradients array
function set_next(num) {
  return (num + 1 < gradients.length) ? num + 1 : 0;
}

// work out how big each rgb step is
function calc_step_size(a,b) {
  return (a - b) / steps_total;
}

// populate the rgb_values and rgb_steps objects
function calc_steps() {
  for (var key in rgb_values) {
    if (rgb_values.hasOwnProperty(key)) {
      for(var i = 0; i < 3; i++) {
        rgb_values[key][i] = gradients[currentIndex][key][i];
        rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i],rgb_values[key][i]);
      }
    }
  }
}

// update current rgb vals, update DOM element with new CSS background
function updateGradient(){
  // update the current rgb vals
  for (var key in rgb_values) {
    if (rgb_values.hasOwnProperty(key)) {
      for(var i = 0; i < 3; i++) {
        rgb_values[key][i] += rgb_steps[key][i];
      }
    }
  }

  // generate CSS rgb values
  var t_color1 = "rgb("+(rgb_values.start[0] | 0)+","+(rgb_values.start[1] | 0)+","+(rgb_values.start[2] | 0)+")";
  var t_color2 = "rgb("+(rgb_values.stop[0] | 0)+","+(rgb_values.stop[1] | 0)+","+(rgb_values.stop[2] | 0)+")";

  // has anything changed on this interation
  if (t_color1 != color1 || t_color2 != color2) {

    // update cols strings
    color1 = t_color1;
    color2 = t_color2;

    // update DOM element style attribute
    div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";
    for (var i = 0; i < 4; i++) {
      div_style.backgroundImage = prefixes[i]+"linear-gradient(45deg, "+color1+", "+color2+")";
    }
  }

  // we did another step
  steps_count++;
  // did we do too many steps?
  if (steps_count > steps_total) {
    // reset steps count
    steps_count = 0;
    // set new indexs
    currentIndex = set_next(currentIndex);
    nextIndex = set_next(nextIndex);
    // calc steps
    calc_steps();
  }

  if (div_style.backgroundImage.indexOf("gradient") != -1) {
    window.requestAnimationFrame(updateGradient)
  }
}

// initial step calc
calc_steps();

// go go go!
window.requestAnimationFrame(updateGradient);
	
	
	///slider//
	
	
	
}); // JQuery end




