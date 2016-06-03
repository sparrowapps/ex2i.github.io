'use strict';

jQuery(document).ready(function ($) {

    //initialise Stellar.js
    $(window).stellar();
    //Cache variables for Stellar.js in the document
    var links = $('.navigation li'),
        slide = $('.slide'),
        button = $('.nav_list span'),
        mywindow = $(window),
        htmlbody = $('html,body');
   
   function viewport()
    {
        var e = window,
            a = 'inner';
        
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
    }

    // Retrieve the height of the document, including padding, margin and border
    var documentHeight = $(document).outerHeight(true);
    var viewPortData = viewport();

    var maxScrollTop = documentHeight - viewPortData.height;

    var getTopPosition = function (index) {
        var paddingTop = parseInt($('.slide').eq(index).css('padding-top'), 10);
        return $('.slide').eq(index).offset().top - paddingTop;
    };

    var isArea = function (index) {
        return mywindow.scrollTop() < getTopPosition(index);
    }

    var getDataSlideSequenceBy = function (scrollTop) {
        return 
    };

    var delayScrollTimer;

    mywindow.scroll(function (e) {

        if (delayScrollTimer) {
            clearTimeout(delayScrollTimer);
        }

        delayScrollTimer = setTimeout(function () {
            var dataSlideIndex = getDataSlideSequenceBy(mywindow.scrollTop()),
                getCommand = function (i) {
                    return dataSlideIndex == i ? '' : '';
                },
                i, length = links.count();

            for (i = 1; i <= length; i++) {
                $('.navigation li[data-slide="' + i + '"]')[getCommand()]('active');
                $('.nav_list li[data-slide="' + i + '"]')[getCommand()]('on');
            }
        }, 100);
    });
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1000, 'easeInOutQuint');
    }

    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    $('.navigation li, .slide').click(function (e) {
        e.preventDefault();
        goToByScroll($(this).attr('data-slide'));
    });

    //Mouse-wheel scroll easing
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    
    window.onmousewheel = document.onmousewheel = wheel;
    
    var time = 250;
    var distance = 150;

    var delta;
    function wheel(event) {
        if (event.wheelDelta) delta = event.wheelDelta / 52;
        else if (event.detail) delta = -event.detail / 1;
        handle();
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }
    function handle() {

        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time);
    }
    
    //keyboard  scroll easing
    $(document).keydown(function (e) {
        switch (e.which) {
            //up
        case 38:
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() - distance
            }, time);
            break;
            //down
        case 40:
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() + distance
            }, time);
            break;
        }
    });
});