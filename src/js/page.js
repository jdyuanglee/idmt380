var imageNum;
var path;

$(document).ready(function() {
  imageNum = findSVG('image');
  prepSVG(imageNum);
  loadSVG('.wrapper', path)
});

function findSVG(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable) {
      return pair[1];
    }
  }
  return(false);
}

function prepSVG(num) {
  if (num == 1) {
    path = 'img/DIGM223_An_Christina.svg';
  } else if (num == 2) {
    path = 'img/DIGM223_Brennan_Stephen.svg';
  } else if (num == 3) {
    path = 'img/DIGM223_Davalos_John.svg';
  } else if (num == 4) {
    path = 'img/DIGM223_Filtz_Angela.svg';
  } else if (num == 5) {
    path = 'img/DIGM223_Hove_Travis.svg';
  } else if (num == 6) {
    path = 'img/DIGM223_Lewing_Maxime.svg';
  } else if (num == 7) {
    path = 'img/DIGM223_Lynch_Fiona.svg';
  } else if (num == 8) {
    path = 'img/DIGM223_Meixner_Sara.svg';
  } else if (num == 9) {
    path = 'img/DIGM223_RizzutoSmith_Elijah.svg';
  } else if (num == 10) {
    path = 'img/DIGM223_Schultz_Julia.svg';
  } else if (num == 11) {
    path = 'img/DIGM223_Spurr_Ben.svg';
  } else if (num == 12) {
    path = 'img/DIGM223_Srnka_Anthony.svg';
  } else if (num == 13) {
    path = 'img/DIGM223_Wolfe_Lindsey.svg';
  } else if (num == 14) {
    path = 'img/DIGM223_Tercek_Clay.svg';
  } else if (num == 15) {
    path = 'img/DIGM223_Toone_Michael.svg';
  } else if (num == 16) {
    path = 'img/DIGM223_Wagner_Ciaran.svg';
  } else {
    path = 'img/DIGM223_Filtz_Angela.svg';
  }
}

function loadSVG(selector, url) {

  if (typeof SVGRect != "undefined") {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.send();

    ajax.onload = function(e) {
      $('.wrapper').prepend(ajax.responseText);
    }
  } else {
    $('.wrapper').prepend("<img src='" + url + "''/>");
  }
}
