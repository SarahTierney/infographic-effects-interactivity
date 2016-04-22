var $body = $('.banner');
var $footprints;
var width = $body.outerWidth();
var height = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $footprints = $('<div>');
  $footprints.addClass('footprints');
  $footprints.css({
    top: Math.random() * height,
    left: Math.random() * width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')',
  });
  $body.append($footprints);
}
