jQuery(document).ready(function ($) {
   /* $('.navigation li').click(function(){
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');

        numchk = $(this).attr('id');
        itemchk = numchk.substr(1,1);
        if(itemchk == 1){
            $('#nav1').addClass('on');
            $('#nav1').siblings('span').removeClass('on');
        }
        else if(itemchk == 2){
            $('#nav2').addClass('on');
            $('#nav2').siblings('span').removeClass('on');
        }
        else if(itemchk == 3){
            $('#nav3').addClass('on');
            $('#nav3').siblings('span').removeClass('on');
        }
        else if(itemchk == 4){
            $('#nav4').addClass('on');
            $('#nav4').siblings('span').removeClass('on');
        }
        else if(itemchk == 5){
            $('#nav5').addClass('on');
            $('#nav5').siblings('span').removeClass('on');
        }
        //console.log(itemchk)

    });
    $('.nav_list span').click(function(){
        $(this).addClass('on');
        $(this).siblings('span').removeClass('on');

        numchk1 = $(this).attr('id');
        itemchk1 = numchk1.substr(3,1);

        if(itemchk1 == 1){
            $('#l1').addClass('active');
            $('#l1').siblings('li').removeClass('active');
        }
        else if(itemchk1 == 2){
            $('#l2').addClass('active');
            $('#l2').siblings('li').removeClass('active');
        }
        else if(itemchk1 == 3){
            $('#l3').addClass('active');
            $('#l3').siblings('li').removeClass('active');
        }
        else if(itemchk1 == 4){
            $('#l4').addClass('active');
            $('#l4').siblings('li').removeClass('active');
        }
        else if(itemchk1 == 5){
            $('#l5').addClass('active');
            $('#l5').siblings('li').removeClass('active');
        }
    });*/
    //initialise Stellar.js
    $(window).stellar();
    //Cache variables for Stellar.js in the document
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.nav_list span');
    mywindow = $(window);
    htmlbody = $('html,body');
    //Set up for waypoints navigation
   /* slide.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });*/
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 

    function viewport()
    {
        var e = window, a = 'inner';
        if (!('innerWidth' in window))
        {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
    }

    // Retrieve the height of the document, including padding, margin and border
    var documentHeight = $(document).outerHeight(true);
    var viewPortData = viewport();

    var maxScrollTop = documentHeight - viewPortData.height;



    mywindow.scroll(function () {
        if(mywindow.scrollTop() == maxScrollTop) {
            $('.navigation li[data-slide="5"]').addClass('active');
            $('.navigation li[data-slide="1"]').removeClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
            $('.navigation li[data-slide="3"]').removeClass('active');
            $('.navigation li[data-slide="4"]').removeClass('active');

            $('.nav_list span[data-slide="5"]').addClass('on');
            $('.nav_list span[data-slide="1"]').removeClass('on');
            $('.nav_list span[data-slide="2"]').removeClass('on');
            $('.nav_list span[data-slide="3"]').removeClass('on');
            $('.nav_list span[data-slide="4"]').removeClass('on');
        }
        else if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
            $('.navigation li[data-slide="3"]').removeClass('active');
            $('.navigation li[data-slide="4"]').removeClass('active');
            $('.navigation li[data-slide="5"]').removeClass('active');

            $('.nav_list span[data-slide="1"]').addClass('on');
            $('.nav_list span[data-slide="2"]').removeClass('on');
            $('.nav_list span[data-slide="3"]').removeClass('on');
            $('.nav_list span[data-slide="4"]').removeClass('on');
            $('.nav_list span[data-slide="5"]').removeClass('on');
        }
        else  if (mywindow.scrollTop() < 1730) {
            $('.navigation li[data-slide="2"]').addClass('active');
            $('.navigation li[data-slide="1"]').removeClass('active');
            $('.navigation li[data-slide="3"]').removeClass('active');
            $('.navigation li[data-slide="4"]').removeClass('active');
            $('.navigation li[data-slide="5"]').removeClass('active');

            $('.nav_list span[data-slide="2"]').addClass('on');
            $('.nav_list span[data-slide="1"]').removeClass('on');
            $('.nav_list span[data-slide="3"]').removeClass('on');
            $('.nav_list span[data-slide="4"]').removeClass('on');
            $('.nav_list span[data-slide="5"]').removeClass('on');
        }
        else  if (mywindow.scrollTop() < 2616) {
            $('.navigation li[data-slide="3"]').addClass('active');
            $('.navigation li[data-slide="1"]').removeClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
            $('.navigation li[data-slide="4"]').removeClass('active');
            $('.navigation li[data-slide="5"]').removeClass('active');

            $('.nav_list span[data-slide="3"]').addClass('on');
            $('.nav_list span[data-slide="1"]').removeClass('on');
            $('.nav_list span[data-slide="2"]').removeClass('on');
            $('.nav_list span[data-slide="4"]').removeClass('on');
            $('.nav_list span[data-slide="5"]').removeClass('on');
        }
        else  if (mywindow.scrollTop() < 3644 && mywindow.scrollTop() > 2616) {
            $('.navigation li[data-slide="4"]').addClass('active');
            $('.navigation li[data-slide="1"]').removeClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
            $('.navigation li[data-slide="3"]').removeClass('active');
            $('.navigation li[data-slide="5"]').removeClass('active');

            $('.nav_list span[data-slide="4"]').addClass('on');
            $('.nav_list span[data-slide="1"]').removeClass('on');
            $('.nav_list span[data-slide="2"]').removeClass('on');
            $('.nav_list span[data-slide="3"]').removeClass('on');
            $('.nav_list span[data-slide="5"]').removeClass('on');
        }
        else {
            $('.navigation li[data-slide="5"]').addClass('active');
            $('.navigation li[data-slide="1"]').removeClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
            $('.navigation li[data-slide="3"]').removeClass('active');
            $('.navigation li[data-slide="4"]').removeClass('active');

            $('.nav_list span[data-slide="5"]').addClass('on');
            $('.nav_list span[data-slide="1"]').removeClass('on');
            $('.nav_list span[data-slide="2"]').removeClass('on');
            $('.nav_list span[data-slide="3"]').removeClass('on');
            $('.nav_list span[data-slide="4"]').removeClass('on');
        }


    });
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1000, 'easeInOutQuint');
    }

    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    //Mouse-wheel scroll easing
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
    var time = 250;
    var distance = 150;
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