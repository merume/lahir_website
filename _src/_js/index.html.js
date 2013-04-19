$(function(){
  var element_middle = function(id_name){
    var left = Math.floor(($(window).width() - $("#" + id_name).width()) / 2);
    var top  = Math.floor(($(window).height() - $("#" + id_name).height()) / 2);
    $("#" + id_name).css({
      "position": "absolute",
      "top": top,
      "left": left,
    });
  };

  var info_fixed = function(){
    var right = Math.floor(($(window).width() - $("#info-wrap").parent().width()) / 2)
    $("#info-wrap").css({"right": right});
  };

  $(window).resize(function(){
    element_middle("img-main");
    info_fixed();
  });

  $(document).ready(function(){
    element_middle("img-main");
    info_fixed();
  });

});
