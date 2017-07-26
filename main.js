$(document).ready(function(){


    $("img").click(function(){
        $(this).fadeOut(300);
    });


    $("button").click(function(){
        $("img").fadeIn(300);
    })



});