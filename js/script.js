//鼠标滚动
$(document).on("mousewheel DOMMouseScroll", function (e) {
  //正向上 负向下
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie &其它
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

    //var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0); //合并写法

    if (delta > 0) {
      $("nav").css({"top":"0","opacity":"1"});
    } else if (delta < 0) {
      $("nav").css({"top":"-40px","opacity":"0"});
    }
});

//前端技能板块鼠标悬停
$(".word").hover(
  function () {
    $(this).css("box-shadow","0px 5px 8px #0870c6");

    $(this).children(".blue-board").css({
      "width":"700px",
      "height":"700px",
      "opacity":"1",
      "margin":"-350px",
    });

    $(this).children(".learn-go").css({
      "left":"0",
      "opacity":"1",
    });

  },
  function () {
    $(this).css("box-shadow","0px 0px 0px rgba(245, 193, 24, 0)");

    $(this).children(".blue-board").css({
      "width":"0",
      "height":"0",
      "opacity":"0",
      "margin":"0",
    });

    $(this).children(".learn-go").css({
      "left":"-230px",
      "opacity":"0",
    });
  }
)



 //设计板块点击效果
var i=1;
var j=1;
var k=1;
var b;
var text0="<h3>作为设计师!</h3>";
var text;
function circle_change(a) {
  if (b==1) {
    $(a).css({
      "width":"600px",
      "height":"600px",
      "margin":"-300px",
      "border-radius":"300px",
      "opacity":"1",
    });
    $(".txt").html(text);
    b=2;
  } else {
    $(a).css({
      "width":"0",
      "height":"0",
      "margin":"0",
      "opacity":"0",
    });
    $(".txt").html(text0);
    b=1;
  }
}//点击小圆的反复动画

function circle_return(c) {
  $(c).css({"width":"0","height":"0","margin":"0","opacity":"0"});
}//点击非当前小圆时对未被点击小圆的还原

$(".c1").click(function () {
  text="审美是设计师的一个入门的需求，我们设计师需要有一双发现美的眼睛，美的东西看的多了 也就自然对一些东西的品味要求就会有相应的提升。";
  j=1;
  k=1;
  circle_return(".c2-back");
  circle_return(".c3-back");
  b=i;
  circle_change(".c1-back");
  i=b;
})

$(".c2").click(function () {
  text="当我们看了很多美丽的东西的时候，这时候我们需要从看到的那些东西里面去学习一些表达 美丽的方法，然后运用在你的网页页面上，设计出属于自己的网页。";
  i=1;
  k=1;
  circle_return(".c1-back");
  circle_return(".c3-back");
  b=j;
  circle_change(".c2-back");
  j=b;
})

$(".c3").click(function () {
  text="良好的交互是一个网页页面所需要的，当用户在浏览你的网页的时候，如果你的网页能够给用户带来愉悦的交互浏览体验，那么这网页就具有良好的交互性。";
  i=1;
  j=1;
  circle_return(".c1-back");
  circle_return(".c2-back");
  b=k;
  circle_change(".c3-back",k);
  k=b;
})
 

//加入流程点击事件
var step1=1;
var step2=1;
var step3=1;
var txt;
var l;
function join(m,n) {
  if(l==1)
  {
    l=2;
    $(m).parent().css({"margin-left":"-130px"});
    $(m).siblings().css("width","260px");
    setTimeout(function(){
      $(n).css({"height":"200px"});
      setTimeout(function(){
        $(n).children("p").html(txt);
      },200);
    },200);
  }
  else {
    l=1;
    $(n).children("p").html("");
    $(n).css({"height":"0px"});
    setTimeout(function(){
      $(m).parent().css({"margin-left":"0px"});
      $(m).siblings().css("width","0px");
    },200);
  }

}

$(".start1").click(function () {
  txt="<br/>你得对制作网页感兴趣，有良好的审美观，自学能力和自制能力强，端正的学习态度。喜欢时尚与设计，享受学习过程，享受制作一个作品从0到1的这个过程。喜欢与志同道合的人一起学习，能够接受挑战，喜欢创新和愿意分享你的想法，能够与大家一同讨论技术等等。<hr>";
  l=step1;
  join(".start1",".join-txt1");
  step1=l;
})

$(".start2").click(function () {
  txt="<br/>了解什么是前端，有一些编程基础或者愿意去学习一些编程的语言，比如c语言，不了解的可以在“一些课程”和“知识体系”这两个页面中去看看。了解设计，不仅仅是网页设计，还有其他更多的设计，工业设计，交互设计，或者艺术设计等。<hr>";
  l=step2;
  join(".start2",".join-txt2");
  step2=l;
})

$(".start3").click(function () {
  txt="<br/>制作一个能展示你得能力的页面并打包好，以你的名字+专业+班级年级发送到邮件453646474@qq.com。可以在邮件正文部分写出你所遇到的疑惑，或者一些你的想法，还可以写你的感悟，如果你达到了要求，我们会将你拉入我们的班级群让你获得更多的学习资源。<hr>";
  l=step3;
  join(".start3",".join-txt3");
  step3=l;
})



var h=$(window).height()-50;

var int=self.setInterval("logoplay(),design(),pointer()",50);

function logo(s) {
  var c=$(s).offset().top-$(window).scrollTop();
  if(c<h)
  {
    $(s).css({"top":"0","opacity":"1"});
  }
}

function step(a) {
  var c=$(a).offset().top-$(window).scrollTop();
  if(c<h)
  {
    $(a).css({"top":"-10px","opacity":"1"});
  }
}

function logoplay() {
  logo(".logo1");
  logo(".word1");
  logo(".logo2");
  logo(".word2");
  logo(".logo3");
  logo(".word3");
  logo(".logo4");
  logo(".word4");

  logo(".learn-web");
  logo(".design-btn-a");
  logo(".left-word");
  logo(".page");


  setTimeout(function(){
    logo(".title1");
    setTimeout(function(){
      logo(".title2");
    },300);
  },300);
  logo(".title3");
  setTimeout(function(){
    logo(".title4");
  },300);


  step(".start1");
  setTimeout(function(){
    step(".start2");
  },300);
  setTimeout(function(){
    step(".start3");
  },600);
}//ｌｏｇｏ翻页动画


function design() {
  var c=$(".ring-out").offset().top-$(window).scrollTop();
  if(c<h)
  {
    $(".ring-out").css({"opacity":"1","transform":"rotate(0deg)"});
  }
}

function pointer() {
  var c=$(".join-pointer").offset().top-$(window).scrollTop();
  if(c<h)
  {
    $(".join-pointer").css({"transform":"rotate(-90deg)"});
  }
}
