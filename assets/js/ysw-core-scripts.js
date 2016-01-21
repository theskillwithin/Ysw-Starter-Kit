//@prepros-prepend ysw-quickview.js

$(document).ready(function() {

    /*
    // pdp item page thumbnails

    $('.pdpthumb').on('click', function(e) {
        var $dat = $(this),
            src = $dat.data("image");
        $('.pdpthumb').removeClass('arrow_box');
        $dat.addClass('arrow_box');
        $('#pdpimage').attr("src", src);
        $('#img-link').attr("href", src + '.jpg');
    });


    // newsletter
    $('#popup .close').on('click', function() {
        $('#popup').remove();
    });

    if (yswLib.getCookie('yswashpop') == 'yswashpop') {
        //console.log('cookie');
        $('#popup').remove();
    } else {
        //console.log('no cookie');
        $('#popup').css('display', 'block');
        yswLib.setCookie('yswashpop', 'yswashpop', 40);
    }


    var filename;
    $("img.add").click(function() {
        var totalLookImg = $(this).parent().find('.smImg').attr('src');
        var filename = totalLookImg.substr(totalLookImg.lastIndexOf("/") + 1);
        filename = '/lib/xxxx/' + filename;
        filename = filename.split('.');
        filename = filename[0] + '-big.' + filename[1];
        filename = 'http://secure.yourstorewizards.com/sandbox/austin/ash' + filename;
        console.log(filename);
        $(".secret").fancybox({
            href: filename,
            padding: '0'
        }).trigger('click');

    });



    //search
    var searchInput = $('#search input');
    searchInput.addClass('hide');
    $('#search').click(function(event) {
        searchInput.removeClass('hide');
        event.stopPropagation();
        $('body').click(function() {
            searchInput.addClass('hide');
        });
    });

    //item page size select
    $('div.size div').click(function() {
        $('div.size div').removeClass('selected');
        $(this).addClass('selected');
        value = $(this).attr("data-value");
        $('#hidden-select select').val(value);
    });
    //item page  OWL
    var owl = $("#carousel");
    owl.owlCarousel({
        items: 3
    });

    $(".right-arrow").click(function() {
        owl.trigger('owl.next');
    });
    $(".left-arrow").click(function() {
        owl.trigger('owl.prev');
    });

    // nav
    var themenu = $('.left'),
        hamburger = $('.mobile-nav-toggle'),
        theWindow = $(window);

    function menuAction(status) {
        mheight = themenu.height() + 5;
        if (status === 'close') {
            themenu.removeClass('open');
            themenu.addClass('closed');
            themenu.css('top', -mheight);
            $('html').off('touchstart', 'html');
            $('html').off('click', 'html');
        } else if (status === 'open') {
            themenu.removeClass('closed');
            themenu.addClass('open');
            themenu.css('top', '35px');
            $('html').on('touchstart', function() {
                menuAction('close')
            });
            $('html').on('click', function() {
                menuAction('close')
            });
        } else if (status === 'desktop') {
            themenu.removeClass('open');
            themenu.removeClass('closed');
            themenu.css('top', '0px');
            $('html').off('touchstart', 'html');
            $('html').off('click', 'html');
        }
    }

    function stopProp(e) {
        e.stopPropagation();
    } // for click anywhere to close functionality
    themenu.on('click', stopProp);
    hamburger.on('click', stopProp);
    themenu.on('touchstart', stopProp);
    hamburger.on('touchstart', stopProp);

    function hamburgerClick() {
        if (themenu.hasClass('open')) {
            menuAction('close');
        } else {
            menuAction('open');
        }
    }

    function nav() {
        if (theWindow.width() < 788) {
            menuAction('close');
            hamburger.on('click', hamburgerClick);
            hamburger.on('tap', hamburgerClick);
        } else {
            menuAction('desktop');
        }
    }

    // navigation sub-categories
    function showTheCurrentSubCat() {
        var active = themenu.find('.active ul');
        if (theWindow.width() > 788) {
            active.css('display', 'block');
        } else {
            active.removeAttr('style');
        }
    }

    function mobileSubCatDownArrow() {
        if (theWindow.width() < 788) {
            $('.down').each(function(index) {
                var
                    that = $(this),
                    theLi = that.parents('li').find('ul'),
                    theSubUl = theLi.parents('li').children('ul');
                if (theLi.length < 1) that.remove();
                else that.on('click', function() {
                    theSubUl.toggle();
                });
            });
        }
    }

    nav();
    mobileSubCatDownArrow();
    showTheCurrentSubCat();
    theWindow.resize(nav);
    theWindow.resize(mobileSubCatDownArrow);
    theWindow.resize(showTheCurrentSubCat);
*/


}), (jQuery);