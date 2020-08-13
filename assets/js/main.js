
	// loader
	$(window).load(function(){
		setInterval(function(){ $('.loader').fadeOut(); }, 3000);
	});
	
	// navbar color change on window scroll
 	$(document).ready(function(){
    		$(window).scroll(function() { // check if scroll event happened
	        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
	          $(".navbar-default").css("background-color", "white"); 
	          $(".navbar-default .navbar-nav>li>a").css("color", "black"); 
	          $(".navbar-default").css("box-shadow", "0 0 8px 0 rgba(0,0,0,0.12)"); 
	          $(".navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover").css("color", "black !important"); 
	        } else {
	       	  $(".contact_btn").css("border-color", "rgb(46 109 164)"); 
	          $(".navbar-default").css("background-color", "transparent"); 
	          $(".navbar-default .navbar-nav>li>a").css("color", "white"); 
	          $(".navbar-default").css("box-shadow", "none"); 
	          $(".navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover").css("color", "white"); 
	        }
	      });
      
    });

	// increment count value
 	$('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

