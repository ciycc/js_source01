$(function() {
    var beforeMenu = null;
    
    $(".gnb > li > a").on("mouseover focus", function() {
       if(beforeMenu) beforeMenu.css({background:"none"});
       $(this).css({"background-color":"#0ff"});
       beforeMenu = $(this);
    });

     $(".gnb").on("mouseleave", function() {
        if(beforeMenu) beforeMenu.css({background:"none"});
     })
});