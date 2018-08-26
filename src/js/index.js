$(document).ready(function(){
  $('.carousel').slick({
     centerMode: true,
     centerPadding: '0px',
     slidesToShow: 5,
     responsive: [
       {
         breakpoint: 960,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 3
         }
       },
       {
         breakpoint: 620,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '6rem',
           slidesToShow: 1
         }
       },
       {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '2.5rem',
          slidesToShow: 1
        }
      }
     ]
  });
});
