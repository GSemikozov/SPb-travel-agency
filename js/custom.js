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