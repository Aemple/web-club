$(document).ready(function() {
    $(".start h1").animate({top:"41%",opacity:"1"},850);
    $(".start p").animate({top:"41%",opacity:"1"},850);
$(window).scroll(function(event){
  var a=$(window).scrollTop();
  var b=$(window).height();
  var c=$('.a').offset().top;
  var d=$('.b').offset().top;
  var e=$('.c').offset().top;
  var f=$('.d').offset().top;
  var g=$('.e').offset().top;
  if(a+b>c) {
    $(".a").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>d) {
    $(".b").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>e) {
    $(".c").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>f) {
    $(".d").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>g) {
    $(".e").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
    });

});

// var piao=$("<div></div>").css({"position":"absolute","top":"-50px";}).html("</scritp>")
// $(function() {
//   var middleHeight=$(".middle").height();
//   var middleWidh=$(".middle").width();
//   setInterval(function() {
//     var starLeft=Math.random()*middleWidh;
//     var starOpacity=0.7+Math.random()*0.3;
//     var endTop=middleHeight;
//     var endLeft=Math.random()*middleWidh;
//     var durationFall=5000+Math.random()*3000;
//     var size=5+Math.random()*50;
//     piao.clone().appendTo(".middle").css({
//       "left":starLeft,
//       "opacity":starOpacit,
//       "font-size":size,
//       "color":rgb(84, 68, 162)
//     }).animate({
//       "top":endTop,
//       "left":endLeft,
//       "opacity":0.5
//     },durationFall,function() {$(this).remove();});
//   },200);
// });
