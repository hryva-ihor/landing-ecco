var rewOwl = $(".reviews-carousel");

$(document).ready(function() {

    $('.product-card .custom-select').selectric({
        arrowButtonMarkup: "<img class='select-icon' src='' alt=''>",
    });

    $(".overview-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true,
            tCounter: "",
        },
    });

    $(".product-card__gallery").each(function(index, item) {
        $(item).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true,
                tCounter: "",
            },
        });
    });

    $(".disinfection__video").magnificPopup({
        type: "iframe",
        delegate: "a"
    });

    $(".overview__video").magnificPopup({
        type: "iframe",
        delegate: "a"
    });

    rewOwl.owlCarousel({
        items: 1,
        loop: true
    });

    $('.owl-next', ".reviews-btns").click(function() {
        rewOwl.trigger('next.owl.carousel', [500]);
    });

    $('.owl-prev', ".reviews-btns").click(function() {
        rewOwl.trigger('prev.owl.carousel', [500]);
    });

    $(".js-anim-link").click(function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 600)
    });

    promotionEndDate(3);
});

function pad(num) {
    return ("0" + num).substr(-2);
}

function promotionEndDate(countDay) {
    const date = new Date(Date.now() + (86400000 * countDay));

    $(".js-end-date").html(pad(date.getDate() - 1) + "." +
        pad(date.getMonth() + 1) + "." +
        pad(date.getFullYear()));
}