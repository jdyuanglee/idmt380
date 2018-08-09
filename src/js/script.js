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
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
  });
});
