$(document).ready(function() {

    if (!navigator.userAgent.match(/Trident.*rv\:11\./)) {

        if ($(window).width() > 1200) {
            parallaxByMouse(document.querySelector(".js-parallax-1"), -0.15);
            parallaxByMouse(document.querySelector(".js-parallax-2"), 0.2);
            parallaxByMouse(document.querySelector(".js-parallax-3"), 0.4);
            parallaxByMouse(document.querySelector(".js-parallax-4"), -0.2);
            parallaxByMouse(document.querySelector(".js-parallax-5"), 0.1);
            // parallaxByMouse(document.querySelector(".js-parallax-6"), 0.2);
            parallaxByMouse(document.querySelector(".js-parallax-7"), -0.3);
            // parallaxByMouse(document.querySelector(".js-parallax-8"), 0.3);
            parallaxByMouse(document.querySelector(".js-parallax-9"), 0.1);
            parallaxByMouse(document.querySelector(".js-parallax-10"), -0.3);
            parallaxByMouse(document.querySelector(".js-parallax-11"), 0.1);
            parallaxByMouse(document.querySelector(".js-parallax-12"), 0.1);
            parallaxByMouse(document.querySelector(".js-parallax-13"), -0.4);
            parallaxByMouse(document.querySelector(".js-parallax-14"), -0.2);
            parallaxByMouse(document.querySelector(".js-parallax-15"), 0.15);
            parallaxByMouse(document.querySelector(".js-parallax-16"), 0.15);
            parallaxByMouse(document.querySelector(".js-parallax-17"), -0.2);
            parallaxByMouse(document.querySelector(".js-parallax-18"), 0.2);
        }
    }

    animatedSections = $(".js-anim-section").toArray().map(function(item) {
        return $(item);
    });

    setInterval(function() {
        const windowWidth = window.innerWidth;
        const offset = $(window).height() / 3;
        const leftSections = [];

        for (let i = 0; i < animatedSections.length; i++) {
            const $item = animatedSections[i];
            if ($item.length === 0) {
                continue;
            }

            const minWidth = $item.data("min-width") || 0;

            if (getDocumentScrollTop() + $(window).height() >= $item.offset().top + offset && minWidth <= windowWidth) {
                const speed = $item.data("speed") || 0;
                sequenceAnim($(".js-anim-scroll", $item), speed, "animated");

                const callbackFuncName = $item.data("animated");
                if (callbackFuncName && window[callbackFuncName]) {
                    window[callbackFuncName].call();
                }
            } else {
                leftSections.push($item);
            }
        }

        animatedSections = leftSections;
    }, 50);

})

function parallaxByMouse(el, factor) {
    if (!el) {
        return;
    }

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement.getBoundingClientRect();
    const sy = rect.top - parentRect.top;

    $(window).on("mousemove", function(e) {
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (sy + rect.height / 2);
        const px = (dx / $(window).width()) * factor * 100;
        const py = (dy / $(window).height()) * factor * 100;

        $(el).css("transform", "translate(" + px + "%, " + py + "%)");
    });
}

function getDocumentScrollTop() {
    return $(document.scrollingElement || document.documentElement).scrollTop();
}

function sequenceAnim(arr, delay, animClass) {
    for (let i = 0; i < arr.length; i++) {
        (function(i) {
            setTimeout(function() {
                arr.eq(i).addClass(animClass);
            }, i * delay);
        })(i);
    }
}