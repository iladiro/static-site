var BrandsCarousel = function() {
  var owlbrand = $("#owl-brand");

  owlbrand.owlCarousel({
    items : 3,
    itemsDesktop : [1170,3],
    itemsDesktopSmall : [979,3],
    itemsTablet : [768, 2],
    itemsMobile : [479, 1],
    responsiveBaseWidth : "#owl-brand",
    responsiveRefreshRate : 100,
    navigation: true,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ]
  });

  // Custom Navigation Events
  $(".next").click(function() {
    owlbrand.trigger('owl.next');
  })
  $(".prev").click(function() {
    owlbrand.trigger('owl.prev');
  })

}
;
