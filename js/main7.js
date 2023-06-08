$(document).ready(function() {
  $('.a > div:gt(0)').hide();
  setInterval(function(){
    $('.a > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('.a');
},3000);
  });

