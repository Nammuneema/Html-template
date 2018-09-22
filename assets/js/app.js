$(document).ready( ()=> {
    AOS.init();
    particlesJS.load('particles-container', '/assets/json/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top - 75) 
        }, 500);
    });
    $('.custom-progress-bar-container').each(function(){
        let bar = $(this).find('.custom-progress-bar')
        bar.animate({
			width:bar.attr("data-percent")
		},1000);
	});
      $(window).scroll((event) => {
        var scroll = $(window).scrollTop();
        // Do something
        var totalHeight = $(window).innerHeight();
        var activeHeight = totalHeight * .80;
        if (scroll >= activeHeight ){
        //   $("#nav-bar").fadeIn(500);
        $("#nav-bar").removeClass("custom-nav-hidden");  
        }
        else{
            // $("#nav-bar").fadeOut(500);  
            $("#nav-bar").addClass("custom-nav-hidden");
        }
        
        
    });
})