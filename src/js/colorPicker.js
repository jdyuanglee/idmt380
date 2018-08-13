var style;
var chosenColor;
var chosenGroup;

function picked(button) {
  style = window.getComputedStyle(button);
  chosenColor = style.backgroundColor;
  // console.log($('g g:hover path').css(fill));
  // $('g g:hover path').css('fill', chosenColor);
  document.getElementsByClassName('picker-indicator')[0].style.backgroundColor = style.backgroundColor;
}

$('g g').on('click', function() {
  chosenGroup = '#' + this.id + ' *';
  $(chosenGroup).css('fill', chosenColor);
});
