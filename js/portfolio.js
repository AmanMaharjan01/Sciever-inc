

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

$(function () {

    $("#services-tab").responsiveTabs({
        animation: 'slide'
    });

});




/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});




     



