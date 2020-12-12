export function scrollfade() {
    if( $(window).width() > 1370) {

        $(window).scroll(function() {
            $("#header").css("opacity", 1 - $(window).scrollTop() / 550);
        });
    }else {
        $("#header").css("opacity", 1);
    }

}