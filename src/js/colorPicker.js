var styleButton;
var newColor;
var chosenGroup;
var svg;

function picked(button) {
  styleButton = window.getComputedStyle(button);
  newColor = styleButton.backgroundColor;
  document.getElementsByClassName('picker-indicator')[0].style.backgroundColor = styleButton.backgroundColor;
}

$(document).ready(function() {

  $('.wrapper').on('click', 'g g', function() {
    chosenGroup = '#' + this.id + ' *';
    $(chosenGroup).css('fill', newColor);
    this.oldColor = newColor;
  });

  $('.wrapper').on('mouseover', 'g g', function() {
    svg = getComputedStyle(this.querySelector('path'));
    this.oldColor = svg.fill;
    console.log('MOUSEOVER: ' + this.oldColor);
    $(this).children().css('fill', newColor);
  });

  $('.wrapper').on('mouseout', 'g g', function() {
    console.log('MOUSEOUT: ' + this.oldColor);
    $(this).children().css('fill', this.oldColor);
  });

});
