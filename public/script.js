$(document).ready(function(){
    $("h1").click(function(){
        $('html').toggleClass('color');
    });
    
    $('html').click(function(){
        $('h1,p').toggleClass('color1');
    });
});