$(document).ready( ()=> {
    AOS.init();
    particlesJS.load('particles-container', '/assets/json/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

      let responsiveMaker = () => {
        if ($(window).innerWidth() <= 576) {
            $('#header').addClass('header-display');
            $('#menu-btn').removeClass('header-display');
            $('#menu-btn').on('click', (e) => { 
                e.preventDefault();
                $('#header').toggleClass('responsive-header');
            });
        } else {
            $('#header').removeClass('responsive-header header-display');
            $('#menu-btn').addClass('header-display');
            
        }
    }

    responsiveMaker();


      $(document).on('click', `a[href^='#']`, function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top - 75) 
        }, 500);
    });
    $('.custom-progress-bar-container').each(function() {
        let bar = $(this).find('.custom-progress-bar')
        bar.animate({
			width:bar.attr('data-percent')
		}, 1000);
	});
      $(window).scroll((event) => {
        const scroll = $(window).scrollTop();
        const totalHeight = $(window).innerHeight();
        const activeHeight = totalHeight * .80;
        if (scroll >= activeHeight) {
        $('#nav-bar').removeClass('custom-nav-hidden');  
        } else{ 
            $('#nav-bar').addClass('custom-nav-hidden');
        }
    });
    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .2
    });

    
    $(window).resize(() => { 
        responsiveMaker()
    });
})