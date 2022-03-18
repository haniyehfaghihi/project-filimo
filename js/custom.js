$(document).ready(function(){
   

    $(".form-width").on("focus",function(e){
        $(this).css("background-color", "#838080");
    });

    $(".form-width").on("focusout",function(e){
        $(this).css("background-color", "#333333");
    });

    // ----------------------------------------------------------------------------
    

    $("#li-nav").hover(function () {
        $('#li-menu').show(300);
    }, function () {
        $('#li-menu').hide();
    });

    $("#li2-nav").hover(function () {
        $('#li2-menu').show(300);
    }, function () {
        $('#li2-menu').hide();
    });

    $("#li3-nav").hover(function () {
        $('#li3-menu').show(300);
    }, function () {
        $('#li3-menu').hide();
    });

    // ---------------------------------------------------------------------------------













});







