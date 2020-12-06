export function scrollfade() {
   $(window).scroll(function() {
       $("#header").css("opacity", 1 - $(window).scrollTop() / 550);
    });
}