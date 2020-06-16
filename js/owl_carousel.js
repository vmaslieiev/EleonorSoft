$(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    dots: false
  });

  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.originalEvent.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  })
});