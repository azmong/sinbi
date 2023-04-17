$(function(){

    $("#gnb > li").hover(function(){
        $(this).children(".submenu").stop().slideDown();
    },function(){
        $(this).children(".submenu").stop().slideUp();
    });

    $("#slide_img li:gt(0)").hide();

    setInterval(function(){
        $("#slide_img > li:first-child").fadeOut().next("li").fadeIn().end().appendTo("#slide_img");
    },3000)

    $("#tab > ul > li:last-child").click(function(){
        $(this).addClass("on");
        $("#tab > ul > li:first-child").removeClass("on");
        $("#notice").hide();
        $("#gallery").show();
    });

    $("#tab > ul > li:first-child").click(function(){
        $(this).addClass("on");
        $("#tab > ul > li:last-child").removeClass("on");
        $("#notice").show();
        $("#gallery").hide();
    });

    $("#pop").click(function(){
        $("#popup").fadeIn();
    });

    $("#close").click(function(){
        $("#popup").fadeOut();
    });

});