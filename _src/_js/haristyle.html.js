
$(function() {
  var img_change = function(catalog_no,photo_no){
    if (photo_no) {
      var selector_name = 'img#catalog_' + catalog_no;
      var datapath = 'img/haristyle/img/' + photo_no + '.jpg';
      $(selector_name).attr('src',datapath);
    }
  };

  $('a.popup_photo').fancybox({
    'overlayColor'  : '#000000',
    'titleShow' : false,
    'transitionIn'  : 'fade',
    'transitionOut' : 'fade'
  });

  $('.thumbnail_photo img').hover(
    function(){img_change($(this).attr('catalog'),$(this).attr('data'));},
    function(){});
});