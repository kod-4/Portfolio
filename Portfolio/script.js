$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $('.navbar').addClass('sticky');
      }else{
        $('.navbar').removeClass('sticky');
      } 
    });
    // menu hamburger
    $('.menu_btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu_btn i').toggleClass('active')
    });
    // carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true, 
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
        }
    });
});