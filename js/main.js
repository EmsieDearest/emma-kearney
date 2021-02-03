// Font Display
try {
    let e = document.createElement("style");
    e.textContent = "@font-face { font-display: swap; }";
    document.documentElement.appendChild(e);
    let isFontDisplaySupported = e.sheet.cssRules[0].cssText.indexOf("font-display") !== -1;
    if (isFontDisplaySupported === false && "fonts" in document) {
        document.fonts.load("1em Open Sans Regular");
        document.fonts.ready.then(function(fontFaceSet) {
            document.documentElement.className += " fonts-loaded";
        });
    }
    else {
        // Maybe figure out your own strategy, but this might be sensible:
        document.documentElement.className += " fonts-loaded";
    }
    e.remove();
} catch (e) {
    // Do something with an error if you want
}

// Cursor Animation
let html = $('html');
let input = $('input');

let ElementCursor = {
    cursorElement: "",
    setCursor: function (cursorElement, hoverElement) {
        html.css({
            'cursor': 'none'
        });
        ElementCursor.cursorElement = cursorElement;
        ElementCursor.hoverElement = hoverElement;
        ElementCursor.updateCursor();
    },
    removeCursor: function () {
        $('html').css({
            'cursor': ''
        });
        ElementCursor.cursorElement = '';
    },
    updateCursor: function () {
        $(document).on('mousemove', function (e) {
            ElementCursor.cursorElement.css({
                'position': 'fixed',
                left: e.clientX,
                top: e.clientY
            });
            /*

            let width = ElementCursor.hoverElement.outerWidth();
            let left = ElementCursor.hoverElement.offset().left;
            if (e.clientX > left + (width / 2)) {
                ElementCursor.cursorElement.addClass('right');
            } else {
                ElementCursor.cursorElement.removeClass('right');
            }

             */
        });
        ElementCursor.hoverElement.mouseenter(function(e) {
            ElementCursor.cursorElement.addClass('in');
        });
        ElementCursor.hoverElement.mouseleave(function(e) {
            ElementCursor.cursorElement.removeClass('in');
        });
    }
};

ElementCursor.setCursor($('#cursor'), $('.btn, a, .work, .blog-link, .form-input, .logo, .nav-link, .close-button, .contrast-img, #skip, .greenhouse, .johnkearney, .bodyweight, .arrow'));
$(window).on('scroll', function(e) {});


// Set Focus/Hover on Logo
$(function() {
    let logo = $('.logo, .logo-home');
    logo.on('focus hover',function(e){
        let src = $(this).attr("src");
        $(this).attr("src", src.replace("../img/wave.svg", "../img/logo-focus.svg"));
    });
    logo.on('mouseleave',function() {
        let src = $(this).attr("src");
        $(this).attr("src", src.replace("../img/logo-focus.svg", "../img/wave.svg"));
    });
});

// Side Panel
/* Set the width of the sidebar to 50% (show it) */
function openNav() {
    let contactBtn = $('.contactbtn');

    // Toggle Visibility
    let toggleSidepanel = $('#mySidepanel');
    if(toggleSidepanel.css('visibility', 'hidden')) {
        toggleSidepanel.css('visibility', 'visible');
        toggleSidepanel.attr('aria-hidden', 'false'); // mark the form window as visible
        contactBtn.attr("aria-expanded", "true")
        form.querySelector("input").focus(); // Focus first input when dialog opens
    } else {
        toggleSidepanel.css('visibility', 'hidden');
        contactBtn.attr("aria-expanded", "false")
        toggleSidepanel.attr('aria-hidden', 'true'); // mark the form window as hidden
    }

    // Decipher screen size
    let x = window.matchMedia("(max-width: 768px)");
    if (x.matches) { // If media query matches
        $('#mySidepanel').css('width', '110%');
    } else {
        document.getElementById("mySidepanel").style.width = "50%";
    }
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    let contactBtn = $('.contactbtn');
    let toggleSidepanel = $('#mySidepanel');

    toggleSidepanel.css('visibility', 'hidden');
    contactBtn.attr("aria-expanded", "false")
    toggleSidepanel.attr('aria-hidden', 'true'); // mark the form window as hidden
    document.getElementById("mySidepanel").style.width = "0";
    contactBtn.attr("aria-expanded", toggleAriaExpanded.replace("true", "false"));
}


// Contrast Button
let contrastButton = $('.contrast-img');
let contrastButtonId = $('#contrast-img');
let contrastButtonBlush = $('.contrast-blush');
let contrastButtonBlack = $('.contrast-black');
let doTheWave = $('.doTheWave');
let btn = $('.btn');
let logo = $('#logo');
let cherry = '#fa0636';
let blush = '#f7dfe8';
let forest = '#428557';
let lavendar = '#d7bfe1';
let yellow = '#faecae';
let blue = '#0068ff';
let blushFilter = 'invert(100%) sepia(17%) saturate(2839%) hue-rotate(216deg) brightness(100%) contrast(93%)';
let cherryFilter = 'invert(16%) sepia(93%) saturate(6576%) hue-rotate(343deg) brightness(97%) contrast(102%)';
let blackFilter = 'grayscale(100%) contrast(2000%)';
let forestFilter = 'invert(44%) sepia(55%) saturate(375%) hue-rotate(86deg) brightness(90%) contrast(87%)';
let blueFilter = 'invert(28%) sepia(58%) saturate(6554%) hue-rotate(211deg) brightness(104%) contrast(104%);;'

/*
// Prevent Widows
$('.about-blurb, .paragraph').each(function(){
    let string = $.trim($(this).html());
    string = string.replace(/ ([^ ]*) ([^ ]*)$/,'&nbsp;$1&nbsp;$2');
    $(this).html(string);
});
*/

// Place Logo on Hover
$(function() {
    $('.logo-div').on('mouseover click tap keydown focusin',function(e){
        if (e.key === 13){
            $('.logo').attr("src", "img/logo-focus.svg");
        } else {
            $('.logo').attr("src", "img/logo-focus.svg");
        }
    });
    $('.logo-div').on('mouseleave focusout',function() {
        $('.logo').attr("src", "img/wave.svg");
    });
});

// Change left arrow from blue to peach on focus and hover
$(function() {
    $('.arrow-focus-left').on('focusin',function(e){
        if (e.key === 13){
            $('.peach-arrow-left').attr("src", "../img/peach-arrow.svg");
        } else {
            $('.peach-arrow-left').attr("src", "../img/peach-arrow.svg");
        }
    });
    $('.arrow-focus-left').on('focusout',function() {
        $('.peach-arrow-left').attr("src", "../img/arrow.svg");
    });
});

// Change right arrow from blue to peach on focus and hover
$(function() {
    $('.arrow-focus-right').on('focusin',function(e){
        if (e.key === 13){
            $('.peach-arrow-right').attr("src", "../img/peach-arrow.svg");
        } else {
            $('.peach-arrow-right').attr("src", "../img/peach-arrow.svg");
        }
    });
    $('.arrow-focus-right').on('focusout',function() {
        $('.peach-arrow-right').attr("src", "../img/arrow.svg");
    });
});

// Place concept image on hover
$(function() {
    $('.greenhouse').on('mouseover focusin',function(e){
        if (e.key === 13){
            $('.greenhouseimg').css("display", "block");
        } else {
            $('.greenhouseimg').css("display", "block");
        }
    });
    $('.greenhouse').on('mouseleave focusout',function() {
        $('.greenhouseimg').css("display", "none");
    });
});
$(function() {
    $('.johnkearney').on('mouseover focusin',function(e){
        if (e.key === 13){
            $('.johnkearneyimg').css("display", "block");
        } else {
            $('.johnkearneyimg').css("display", "block");
        }
    });
    $('.johnkearney').on('mouseleave focusout',function() {
        $('.johnkearneyimg').css("display", "none");
    });
});
$(function() {
    $('.bodyweight').on('mouseover focusin',function(e){
        if (e.key === 13){
            $('.bodyweightimg').css("display", "block");
        } else {
            $('.bodyweightimg').css("display", "block");
        }
    });
    $('.bodyweight').on('mouseleave focusout',function() {
        $('.bodyweightimg').css("display", "none");
    });
});

/*
// Theme Picker Function
$(function(){
    const theme = [1, 2, 3];
    let i = 0;
    contrastButtonId.on('mousedown keydown', function(){
        i = (i++) % theme.length;
        switch (theme[i]) {
            case i = 1:
                return blackOnBlush();
                break;
            case i = 2:
                return cherryOnYellow();
                break;
            case i = 3:
                return cherryOnBlush();
                break;
        }
        return theme[i];
    });
});

 */
