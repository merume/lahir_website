$(function(){
  var left = Math.floor(($(window).width() - $("#logo").width()) / 2);
  var top  = Math.floor(($(window).height() - $("#logo").height()) / 2);

  $("#logo").css({
    "top": top,
    "left": left,
  });
});
