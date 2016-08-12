/// <reference path="../typings/globals/jquery/index.d.ts" />
var ipronum = 0;
$(function () {
    $(".dbtn").click(function () {
        ipronum++;
        var addImg = $(this).parent().find('.dpic').find('img');
        var cloneImg = addImg.clone();
        cloneImg.css({
            "width": "250px",
            "height": "250px",
            "position": "absolute",
            "top": addImg.offset().top,
            "left": addImg.offset().left,
            "z-index": 1000,
            "opacity": ".5"
        }).appendTo($("body")).animate({
            "width": "50px",
            "height": "50px",
            "top": $("#dcar").offset().top,
            "left": $("#dcar").offset().left
        }, 1000, function () {
            $("#dprocount").text(ipronum);
            $(this).detach();
        });
    });
});