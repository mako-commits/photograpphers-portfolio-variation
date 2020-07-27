$("#play-video").on("click", function (e) {
    e.preventDefault();
    $("#video-overlay").addClass("open");
    $("#video-overlay").append(
        '<iframe width="560" height="315" src="#" frameborder="0" allowfullscreen></iframe>'
    );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        close_video();
    }
});

function close_video() {
    $(".video-overlay.open").removeClass("open").find("iframe").remove();
}



$(document).ready(function () {

    [...document.querySelectorAll('.first-column')].map(column => {
        column.style.setProperty('--animation', 'slide');
        column.style.setProperty('height', '200%');
        column.innerHTML = column.innerHTML + column.innerHTML;
    });

});