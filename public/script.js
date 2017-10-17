$(document).ready(function(){
    $("html").click(function(){
        $('html').toggleClass('color');
        $('h1,p,a').toggleClass('color1');
    });
});