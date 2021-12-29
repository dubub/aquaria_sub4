$(function(){
    $('.tab01_inner_01 a').click(function(){
        $('.popup_01').fadeIn(); //show(); 사용가능
    });
    $('.popup_01 a').click(function(){
        $('.popup_01').fadeOut(); //hide(); 사용가능
    });
    $('.close').click(function(){
        $('.popup_01').fadeOut(); //hide(); 사용가능
    });
    $('.tab01_inner_02 a').click(function(){
        $('.popup_02').fadeIn(); //show(); 사용가능
    });
    $('.popup a').click(function(){
        $('.popup_02').fadeOut(); //hide(); 사용가능
    });
    $('.close').click(function(){
        $('.popup_02').fadeOut(); //hide(); 사용가능
    });
});