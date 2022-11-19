$(function(){
    var baseFontSize = 14;
    $(".zoomBtnZone button")
    function zoomInOut( ) {
        if($(this).hasClass("zoomOutBtn")){
            if(baseFontSize<=8) return false;            
            
        } else if($(this).hasClass("zoomInBtn")){
            if(baseFontSize>=20) return false;
            
        } else{
            baseFontSize = 14;
        }
        $(".fontSize").text(baseFontSize + "px");
        $("body").css({fontSize:baseFontSize + "px"});
    }
});