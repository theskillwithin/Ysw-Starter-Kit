/**********************************************
 
 
 
 **********************************************/


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
    runAfterPopupLoads: function(x) {
        return x;
    },
    fixPos: function(ani) {
        var yPos = ((jQuery(window).height() - jQuery('#yswQVbox').height()) / 2) + (jQuery(document).scrollTop());
        var xPos = (jQuery(window).width() / 2) - (jQuery('#yswQVbox').width() / 2);
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
    closeBox: function() {
        jQuery('#ysw-bgshade').hide();
        jQuery('#yswQVbox').hide();
        jQuery('#yswQVbox .content').html('');
    },
    execute: function() {
        jQuery(document).ready(function() {
            var docHeight = jQuery(document).height();

            jQuery('body').append('<div id="ysw-bgshade" style="height:' + docHeight + 'px;"></div>');
            jQuery('body').append('<div id="yswQVbox" style><div id="quickviewtopbar">' + yswQuickView.windowTitle + '<div id="quickviewclose">' + yswQuickView.closeBtn + '</div></div><div class="content"></div></div>');

            jQuery(yswQuickView.catTarget).css('position', 'relative');
            jQuery(yswQuickView.catTarget).append('<a href="javascript:void(0);" class="ysw-quickview">' + yswQuickView.buttonText + '</a>');

            jQuery(yswQuickView.catTarget).hover(function() {
                var btnPosX = (jQuery(this).width() - jQuery(this).find('.ysw-quickview').outerWidth()) / 2;
                jQuery(this).find('.ysw-quickview').css('left', btnPosX + 'px');

                if (yswQuickView.buttonFade) {
                    jQuery(this).find('.ysw-quickview').fadeTo(250, yswQuickView.buttonOpacity).show();
                } else {
                    jQuery(this).find('.ysw-quickview').fadeTo(0, yswQuickView.buttonOpacity).show();
                }
            }, function() {
                if (jQuery(this).find('.ysw-quickview').hasClass('clicked')) {} else {
                    jQuery(this).find('.ysw-quickview').hide();
                }
            });

            selectString = yswQuickView.catTarget.split(',');
            for (i = 0; i < selectString.length; i++) {
                selectString[i] = selectString[i] + ' .ysw-quickview';
            }
            selectString = selectString.join(',');

            jQuery(selectString).click(function() {

                yswQuickView.fixPos();
                jQuery(this).addClass('clicked');

                jQuery('#yswQVbox .content').load(jQuery(this).parent().find('a:eq(0)').attr('href') + ' ' + yswQuickView.itemPageTarget, function(data) {
                    jQuery('.ysw-quickview').removeClass('clicked');
                    jQuery('#ysw-bgshade').show().fadeTo(0, 0.7);
                    yswQuickView.fixPos();
                    jQuery('.ysw-quickview').hide();
                    jQuery('#yswQVbox').show();

                    // run these scripts after popup is displayed
                    if (yswQuickView.altScripts != '') {
                        var appendScripts = yswQuickView.altScripts.split(',');

                        jQuery(appendScripts).each(function() {

                            var script = document.createElement("script");
                            script.type = "text/javascript";
                            script.src = this;
                            document.body.appendChild(script);

                        });
                    }

                    yswQuickView.runAfterPopupLoads();
                });

            });

            jQuery('#ysw-bgshade, #quickviewclose').click(function() {
                yswQuickView.closeBox();
                if (yswQuickView.altScripts != '') {
                    removeThisAmmountOfScripts = yswQuickView.altScripts.split(',');
                    for (i = 0; i <= removeThisAmmountOfScripts.length - 1; i++) {
                        jQuery('script[src="' + removeThisAmmountOfScripts[i] + '"]').remove();
                    }
                }
            });

            jQuery(window).scroll(function() {
                if (yswQuickView.windowSlide && jQuery('#yswQVbox').css('display') != 'none') {
                    yswQuickView.fixPos(true);
                }
            });


            jQuery(window).resize(function() {
                yswQuickView.fixPos();
            });

            jQuery(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    yswQuickView.closeBox();
                }
            });
        });
    }
}