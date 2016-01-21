/**********************************************
 
 
 
 **********************************************/

'use strict';

var yswQuickView = {
    catTarget: '', // container directly containing thumbnail (multiple allowed; sep w/commas)
    itemPageTarget: '', // item page area pulled into the box
    windowSlide: true, // Quick view box follows page when scrolled
    windowTitle: '',
    buttonText: '',
    buttonFade: true,
    buttonOpacity: .8,
    closeBtn: '',
    altScripts: '',
    runAfterPopupLoads: function runAfterPopupLoads(x) {
        return x;
    },
    fixPos: function fixPos(ani) {
        var yPos = (jQuery(window).height() - jQuery('#yswQVbox').height()) / 2 + jQuery(document).scrollTop();
        var xPos = jQuery(window).width() / 2 - jQuery('#yswQVbox').width() / 2;
        if (ani) {
            jQuery('#yswQVbox').animate({
                top: yPos + 'px',
                left: xPos + 'px'
            }, 250);
        } else {
            jQuery('#yswQVbox').css({
                'top': yPos + 'px',
                'left': xPos + 'px'
            });
        }
        jQuery('#yswQVbox').css({
            'max-height': jQuery(window).height() + 'px'
        });
    },
    closeBox: function closeBox() {
        jQuery('#ysw-bgshade').hide();
        jQuery('#yswQVbox').hide();
        jQuery('#yswQVbox .content').html('');
    },
    execute: function execute() {
        jQuery(document).ready(function () {
            var docHeight = jQuery(document).height();

            jQuery('body').append('<div id="ysw-bgshade" style="height:' + docHeight + 'px;"></div>');
            jQuery('body').append('<div id="yswQVbox" style><div id="quickviewtopbar">' + yswQuickView.windowTitle + '<div id="quickviewclose">' + yswQuickView.closeBtn + '</div></div><div class="content"></div></div>');

            jQuery(yswQuickView.catTarget).css('position', 'relative');
            jQuery(yswQuickView.catTarget).append('<a href="javascript:void(0);" class="ysw-quickview">' + yswQuickView.buttonText + '</a>');

            jQuery(yswQuickView.catTarget).hover(function () {
                var btnPosX = (jQuery(this).width() - jQuery(this).find('.ysw-quickview').outerWidth()) / 2;
                jQuery(this).find('.ysw-quickview').css('left', btnPosX + 'px');

                if (yswQuickView.buttonFade) {
                    jQuery(this).find('.ysw-quickview').fadeTo(250, yswQuickView.buttonOpacity).show();
                } else {
                    jQuery(this).find('.ysw-quickview').fadeTo(0, yswQuickView.buttonOpacity).show();
                }
            }, function () {
                if (jQuery(this).find('.ysw-quickview').hasClass('clicked')) {} else {
                    jQuery(this).find('.ysw-quickview').hide();
                }
            });

            selectString = yswQuickView.catTarget.split(',');
            for (i = 0; i < selectString.length; i++) {
                selectString[i] = selectString[i] + ' .ysw-quickview';
            }
            selectString = selectString.join(',');

            jQuery(selectString).click(function () {

                yswQuickView.fixPos();
                jQuery(this).addClass('clicked');

                jQuery('#yswQVbox .content').load(jQuery(this).parent().find('a:eq(0)').attr('href') + ' ' + yswQuickView.itemPageTarget, function (data) {
                    jQuery('.ysw-quickview').removeClass('clicked');
                    jQuery('#ysw-bgshade').show().fadeTo(0, 0.7);
                    yswQuickView.fixPos();
                    jQuery('.ysw-quickview').hide();
                    jQuery('#yswQVbox').show();

                    // run these scripts after popup is displayed
                    if (yswQuickView.altScripts != '') {
                        var appendScripts = yswQuickView.altScripts.split(',');

                        jQuery(appendScripts).each(function () {

                            var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.src = this;
                            document.body.appendChild(script);
                        });
                    }

                    yswQuickView.runAfterPopupLoads();
                });
            });

            jQuery('#ysw-bgshade, #quickviewclose').click(function () {
                yswQuickView.closeBox();
                if (yswQuickView.altScripts != '') {
                    removeThisAmmountOfScripts = yswQuickView.altScripts.split(',');
                    for (i = 0; i <= removeThisAmmountOfScripts.length - 1; i++) {
                        jQuery('script[src="' + removeThisAmmountOfScripts[i] + '"]').remove();
                    }
                }
            });

            jQuery(window).scroll(function () {
                if (yswQuickView.windowSlide && jQuery('#yswQVbox').css('display') != 'none') {
                    yswQuickView.fixPos(true);
                }
            });

            jQuery(window).resize(function () {
                yswQuickView.fixPos();
            });

            jQuery(document).keyup(function (e) {
                if (e.keyCode == 27) {
                    yswQuickView.closeBox();
                }
            });
        });
    }
};
//@prepros-prepend ysw-quickview.js

"use strict";

$(document).ready(function () {}), jQuery;

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
//# sourceMappingURL=ysw-core-scripts.js.map