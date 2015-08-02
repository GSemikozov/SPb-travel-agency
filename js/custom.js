$(document).ready(function(){
    $('#excursions').on('click', function() {
        var i = $(this).find('#arrow-down');
        i.toggleClass('fa-angle-down fa-angle-up');
    });
    //if video not re-playing
    $('video').on('ended', function () {
        this.load();
        this.play();
    });
});
/*======================= full columns height ========================*/
$(document).ready(function() {
    resizeContent();
    $(window).resize(resizeContent);
});

function resizeContent() {
    if ($('div#list').hasClass('active')) {
        var mainDivs = $(".column");
        var maxHeight = 0;
        for (var i = 0; i < mainDivs.length; ++i) {
            if (maxHeight < $(mainDivs[i]).height()) {
                maxHeight = $(mainDivs[i]).height();
            }
        }
        for (var e = 0; e < mainDivs.length; ++e) {
            $(mainDivs[e]).height(maxHeight);
        }
    }
}
