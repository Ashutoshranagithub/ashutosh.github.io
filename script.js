$(function() {
	var logo = $('#logo');
	var flash_typed = $('#flash_notification')
   $("#typed").typed( {
     strings: ["Hello There,", 'Welcome'],
     typeSpeed: 50,
     backDelay: 1000,
     smartBackspace: true,
   });
   flash_typed.typed({
   	 strings: ["This page is not responsive.","*Page will update daily.", 
   	 "click on green button."],
     typeSpeed: 90,
     backDelay: 500,
     smartBackspace: true,
     loop: true, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
   });
 /*$('#logo').addClass('animated tada');*/
 $()
 TweenLite.to(logo, 3, { ease: Bounce.easeOut, y: 20});

 });
