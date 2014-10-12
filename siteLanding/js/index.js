
'use strict';

var path      = require('path');
var dom       = require('domquery');
var FastClick = require('fastclick');

// Reference common directory
var classie      = require('util_modules/classie_util');
var smoothScroll = require('util_modules/scroll_smooth_util');
require('ux_patterns/molecules/navigation/site_nav_overlay')();

// Setup
FastClick(document.body);
smoothScroll.init();


dom('[data-js="haikuaction"]').on('click', toggleCardStepVisibility );

function toggleCardStepVisibility (evt) {
  evt.preventDefault();

  var step = this.getAttribute('data-step');
  var card = document.getElementById(step);

  var cardHaiku = card.querySelector('.Card-haiku');
  var cardDetails = card.querySelector('.Card-details');

  if ( classie.has( cardDetails, 'is-hidden')){
    classie.remove( cardDetails, 'is-hidden');
    classie.add( cardHaiku, 'is-hidden');
    if (document.getElementById(step)) {
      document.getElementById(step).scrollIntoView();
      // var nextTargetId = "#" + step;
      // smoothScroll.animateScroll( null, nextTargetId );
    }

  } else {
    classie.add( cardDetails, 'is-hidden');
    classie.remove( cardHaiku, 'is-hidden');
    var nextStep = this.getAttribute('data-next');

    if (document.getElementById(nextStep)) {
      var nextTargetId = "#" + nextStep;
      smoothScroll.animateScroll( null, nextTargetId );
    } else {
      smoothScroll.animateScroll( null, "#step-1" );
    }

  }

}
