var styleButton;
var newColor;
var chosenGroup;
var svg;

function picked(button) {
  styleButton = window.getComputedStyle(button);
  newColor = styleButton.backgroundColor;
  document.getElementsByClassName('picker-indicator')[0].style.backgroundColor = styleButton.backgroundColor;
}

$('g g').on('click', function() {
  chosenGroup = '#' + this.id + ' *';
  $(chosenGroup).css('fill', newColor);
  this.oldColor = newColor;
});

$('g g').on('mouseover', function() {
  svg = getComputedStyle(this.querySelector('path'));
  this.oldColor = svg.fill;
  console.log('MOUSEOVER: ' + this.oldColor);
  $(this).children().css('fill', newColor);
});

$('g g').on('mouseout', function() {
  console.log('MOUSEOUT: ' + this.oldColor);
  $(this).children().css('fill', this.oldColor);
});
