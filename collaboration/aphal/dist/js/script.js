$(document).ready(function(){
  $('.carousel').slick({
     centerMode: true,
     centerPadding: '0px',
     slidesToShow: 5,
     responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 5
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
  });
});
