var style;
var chosenColor;

function picked(button) {
  style = window.getComputedStyle(button);
  chosenColor = style.backgroundColor;
  document.getElementsByClassName('picker-indicator')[0].style.backgroundColor = style.backgroundColor;
}

$('path').on('click', function() {
    console.log('click');
    $(this).css( 'fill', chosenColor );
});
