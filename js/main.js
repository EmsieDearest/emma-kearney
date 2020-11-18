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

ElementCursor.setCursor($('#cursor'), $('.btn, a, .work, .blog-link, .blog-link2, .form-input, .logo, .nav-link, .nav-link2, .close-button, .contrast-img, .doTheWave, #skip, .greenhouse, .darlingmag, .bodyweight, .arrow'));
$(window).on('scroll', function(e) {});

// Set Focus Styles
//$('.logo').on("keypress", () => $('.logo').attr('src', '/img/logo-focus.svg'));
//$('.logo').on("focusout", () => $('.logo').attr('src', '/img/wave.svg'));

$(function() {
    let logo = $('.logo');
    logo.on('mouseover',function(e){
        let src = $(this).attr("src");
        $(this).attr("src", src.replace("img/wave.svg", "img/logo-focus.svg"));
    });
    logo.on('mouseleave',function() {
        let src = $(this).attr("src");
        $(this).attr("src", src.replace("img/logo-focus.svg", "img/wave.svg"));
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


// Prevent Widows
$('.intro').each(function(){
    let string = $.trim($(this).html());
    string = string.replace(/ ([^ ]*) ([^ ]*)$/,'&nbsp;$1&nbsp;$2');
    $(this).html(string);
});


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
    $('.darlingmag').on('mouseover focusin',function(e){
        if (e.key === 13){
            $('.darlingimg').css("display", "block");
        } else {
            $('.darlingimg').css("display", "block");
        }
    });
    $('.darlingmag').on('mouseleave focusout',function() {
        $('.darlingimg').css("display", "none");
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


// Place GIF on Hover
$(function() {
    $('.contrast-div').on('mouseover click tap keydown focusin',function(e){
        if (e.key === 13){
            contrastButton.attr("src", "img/dothewave.gif");
        } else {
            contrastButton.attr("src", "img/dothewave.gif");
        }
    });
    $('.contrast-div').on('mouseleave focusout',function() {
        contrastButton.attr("src", "img/contrast.svg");
    });
});


// Define Theme Parameters
const blackOnBlush = () => {
    $("body").css("background-color", blush);
    $("#cursor").css("filter", cherryFilter);
    $('#skip').on('focus', function(){
        $('#skip').css('color', 'black');
    });
    $(".logo").css('filter', blackFilter);
    $('p').css('color', 'black');
    $('::-webkit-resizer').css('color', 'black');
    $('.nav-link').css('color', 'black');
    $('input:focus, textarea:focus, textarea:active, input:active').css({
        'transition': 'background-color 5000s',
        'border-weight': '0.17em',
    });
    $('label, textarea, input').css('filter', 'invert(100%) sepia(50%) hue-rotate(-260deg) brightness(120%) contrast(93%)');
    $('.intro, h2').css('color', 'black');
    $('.lightning').attr("src", "img/lightning.svg");
    $('.sidepanel').css({
        'background-color': blue,
        'borderRight': '0.13rem solid black',
    });
    $('.close-button').css('filter', 'invert(100%) sepia(50%) hue-rotate(-260deg) brightness(120%) contrast(93%)');
    // btn event styles
    btn.css({
        'background-color': 'black !important'
    })
    $(function(){
        btn.on('hover focusin', function() {
            $(this).css({
                //'filter': 'invert(100%) sepia(50%) hue-rotate(-260deg) brightness(120%) contrast(93%)',
                'background-color': blushFilter,
                'color': 'black',
                'border-color': 'black'
            });
        });
        btn.on('mousedown focusout', function(event){
            event.target.css({
                'background-color': blue,
                'color': 'black',
                'border-color': 'black'
            });
        });
    })
    $('.err').css('color', 'black');
    $('.success-p').css('color', 'black');
    $(function (){
        $('.contrast-div').on('mouseover click tap focusin', function(){
            if (e.key === 13){
                contrastButton.attr("src", "img/dothewave_blk-on-blsh.gif");
            } else {
                contrastButton.attr("src", "img/dothewave_blk-on-blsh.gif");
            }
        })
        $('.contrast-div').on('mouseleave focusout', function(){
            contrastButton.attr("src", "img/contrast-black.svg");
        })
    })
}

// const blushOnBlack = () => {
//     $('#cursor').css('filter', blushFilter);
//     $("body").css("backgroundColor", 'black');
//     $('#skip').on('focus', function(){
//         $('#skip').css('color', blush);
//     });
//     $(".logo").css('filter', blushFilter);
//     $('p').css('color', blush);
//     $('::-webkit-resizer').css('color', blush);
//     $('.nav-link').css('color', blush);
//     $('input, textarea').css('filter', blushFilter);
//     $('input:focus, textarea:focus, textarea:active, textarea:-internal-autofill-selected, input:active, input:-internal-autofill-selected').css({
//         'color': '#fff6f6 !important',
//         'transition': 'background-color 5000s',
//         'border': '0.17em solid #fff6f6 !important'
//     });
//     $('textarea, input').css({
//         'color': '#fff6f6 !important',
//         'border': '0.13rem solid #fff6f6 !important',
//         'backgroundColor': 'black'
//     });
//     $('label').css({
//         'color': blush,
//     });
//     btn.css({
//         "backgroundColor": blush,
//         'color': 'black',
//     });
//     $('.intro').css('color', blush);
//     $('.lightning').attr("src", "img/lightning-yellow.svg");
//     $('.hands').attr("src", "img/hands-yellow.svg");
//     $('.flower').attr("src", "img/flower-yellow.svg");
//     $('.magicwand').attr("src", "img/magicwand-yellow.svg");
//     $('.sidepanel').css({
//         'backgroundColor': 'black',
//         'borderRight': '0.13rem solid #fff6f6',
//     });
//     $('.close-button').css('filter', blushFilter);
//     $('.form-input').css({
//         'border': '0.13rem solid #fff6f6',
//         '-webkit-box-shadow': '0 0 0px 1000px black inset !important'
//     });
//     btn.on('focus', function(){
//         $('.btn').css({
//             'backgroundColor': 'black',
//             'color': blush,
//             'border': '0.13rem solid #fff6f6'
//         })
//     })
//     $('.err').css('color', blush);
//     $('.success-p').css('color', blush);
//     $(function (){
//         contrastButton.on('mouseover click tap', function(){
//             let $this = $(this);
//             let switchClass = $this.attr('class');
//             $(this).attr("src", "img/dothewave_blsh-on-blk.gif");
//             $this.attr("class", switchClass.replace("contrast-img", "doTheWave"));
//             $('#contrast-img:focus').css('outline', 'black');
//         })
//         contrastButton.on('mouseleave', function(){
//             let src = $(this).attr("src");
//             let switchClass = $(this).attr('class');
//             $(this).attr("src", "img/contrast-blush.svg");
//             $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
//         })
//     })
// }

const cherryOnYellow = () => {
    $("body").css("backgroundColor", yellow);
    $("#cursor").css("filter", blackFilter);
    $('#skip').on('focus', function(){
        $(this).css('color', cherry);
    });
    $(".logo").css('filter', cherryFilter);
    $('p').css('color', cherry);
    $('::-webkit-resizer').css('color', cherry);
    $('.nav-link').css('color', cherry);
    $('input:focus, textarea:focus, textarea:active, textarea:-internal-autofill-selected, input:active, input:-internal-autofill-selected').css({
        'color': '#fa0636 !important',
        'transition': 'background-color 5000s',
        'border': '0.17em solid #fa0636 !important'
    });
    $('label, input, textarea').css({
        'color': blue,
        'backgroundColor': 'transparent !important',
        'filter': blackFilter
    });
    // btn event styles
    $(function(){
        btn.on('mousedown', function(event){
            event.target.css({
                'background-color': blush,
                'color': cherry,
                'border-color': cherry
            });
        });
    })
    $('.intro, h2').css('color', cherry);
    $('.sidepanel').css({
        'backgroundColor': blush,
        'borderRight': '0.13rem solid #fa0636'
    });
    $('.close-button').css('filter', cherryFilter);
    $('.err').css('color', cherry);
    $('.success-p').css('color', cherry);
    $(function (){
        $('.contrast-div').on('mouseover click tap focusin', function(){
            if (e.key === 13 || 9){
                contrastButton.attr("src", "img/dothewave.gif");
            } else {
                contrastButton.attr("src", "img/dothewave.gif");
            }
        })
        $('.contrast-div').on('mouseleave focusout', function(){
            if (e.key === 13 || 9){
                contrastButton.attr("src", "img/contrast.svg");
            } else {
                contrastButton.attr("src", "img/contrast.svg");
            }
        })
    })
}

const cherryOnBlush = () => {
    $('#cursor').css('filter', 'grayscale(100%) contrast(2000%)')
    $("body").css("backgroundColor", blush);
    $('#skip').on('focus', function(){
        $('#skip').css('color', cherry);
    });
    $(".logo").css('filter', cherryFilter);
    $('p').css('color', cherry);
    $('::-webkit-resizer').css('color', cherry);
    $('.nav-link').css('color', cherry);
    $('input:focus, textarea:focus, textarea:active, textarea:-internal-autofill-selected, input:active, input:-internal-autofill-selected').css({
        'color': '#fa0636 !important',
        'transition': 'background-color 5000s',
        'border': '0.17em solid #fa0636 !important'
    });
    $('textarea, input').css({
        'color': '#fa0636 !important',
        'border': '0.13rem solid #fa0636 !important',
        'backgroundColor': blush
    });
    $('label, input, textarea').css({
        'color': cherry,
        'backgroundColor': 'transparent !important',
        'filter': cherryFilter
    });
    $('.intro, h2').css('color', cherry);
    $('.sidepanel').css({
        'backgroundColor': yellow,
        'borderRight': '0.13rem solid #fa0636',
    });
    $('.close-button').css('filter', cherryFilter);
    btn.on('focus', function(){
        btn.css({
            'backgroundColor': 'transparent',
            'color': cherry,
            'border': '0.13rem solid #fa0636'
        })
    });
    btn.on('mousedown', function(event){
        btn.css({
            'backgroundColor': 'transparent',
            'color': cherry,
            'border': '0.1rem solid #fa0636'
        })
    })
    $('.err').css('color', cherry);
    $('.success-p').css('color', cherry);
    $(function (){
        $('.contrast-div').on('mouseover click tap focusin', function(){
            if (e.key === 13 || 9){
                contrastButton.attr("src", "img/dothewave.gif");
            } else {
                contrastButton.attr("src", "img/dothewave.gif");
            }        })
        $('.contrast-div').on('mouseleave focusout', function(){
            contrastButton.attr("src", "img/contrast.svg");
        })
    })
}

// const blushOnForest = () => {
//     $('#cursor').css('filter', blushFilter)
//     $("body").css("backgroundColor", forest);
//     $('#skip').on('focus', function(){
//         $('#skip').css('color', blush);
//     });
//     $(".logo").css('filter', blushFilter);
//     $('p').css('color', blush);
//     $('::-webkit-resizer').css('color', blush);
//     $('.nav-link').css('color', blush);
//     $('input, textarea').css('filter', blushFilter);
//     $('input:focus, textarea:focus, textarea:active, textarea:-internal-autofill-selected, input:active, input:-internal-autofill-selected').css({
//         'color': '#fff6f6 !important',
//         'transition': 'background-color 5000s',
//         'border': '0.17em solid #fff6f6 !important'
//     });
//     $('textarea, input').css({
//         'color': '#fff6f6 !important',
//         'border': '0.13rem solid #fff6f6 !important',
//         'backgroundColor': forest
//     });
//     $('label').css({
//         'color': blush,
//         'backgroundColor': 'transparent !important'
//     });    btn.css({
//         "backgroundColor": blush,
//         'color': forest
//     })
//     $('.intro').css('color', blush);
//     $('.lightning').attr("src", "img/lightning-yellow.svg");
//     $('.hands').attr("src", "img/hands-yellow.svg");
//     $('.flower').attr("src", "img/flower-yellow.svg");
//     $('.magicwand').attr("src", "img/magicwand-yellow.svg");
//     $('.sidepanel').css({
//         'backgroundColor': forest,
//         'borderRight': '0.13rem solid #fff6f6'
//     });
//     $('.close-button').css('filter', blushFilter);
//     $('.form-input').css({
//         'border': '0.13rem solid #fff6f6'
//     });
//     btn.on('focus', function(){
//         btn.css({
//             'backgroundColor': 'transparent',
//             'color': blush,
//             'border': '0.13rem solid #fff6f6'
//         })
//     });
//     btn.on('mousedown', function(event){
//         btn.css({
//             'backgroundColor': 'transparent',
//             'color': blush,
//             'border': '0.1rem solid #fff6f6'
//         })
//     })
//     $('.err').css('color', blush);
//     $('.success-p').css('color', blush);
//     $(function (){
//         contrastButton.on('mouseover click tap', function(){
//             let $this = $(this);
//             let switchClass = $this.attr('class');
//             $(this).attr("src", "img/dothewave_blsh-on-blk.gif");
//             $this.attr("class", switchClass.replace("contrast-img", "doTheWave"));
//             $('#contrast-img:focus').css('outline', forest);
//         })
//         contrastButton.on('mouseleave', function(){
//             let src = $(this).attr("src");
//             let switchClass = $(this).attr('class');
//             $(this).attr("src", "img/contrast-blush.svg");
//             $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
//         })
//     })
// }

// const cherryOnLavendar = () => {
//     $('#cursor').css('filter', blackFilter)
//     $("body").css("background-color", lavendar);
//     $('#skip').on('focus', function(){
//         $('#skip').css('color', cherry);
//     });
//     $(".logo").css('filter', cherryFilter);
//     $('p').css('color', cherry);
//     $('::-webkit-resizer').css('color', cherry);
//     $('.nav-link').css('color', cherry);
//     $('input, textarea').css('filter', cherryFilter);
//     $('input:focus, textarea:focus, textarea:active, textarea:-internal-autofill-selected, input:active, input:-internal-autofill-selected').css({
//         'color': '#fa0636 !important',
//         'transition': 'background-color 5000s',
//         'border': '0.17em solid #fa0636 !important'
//     });
//     $('textarea, input').css({
//         'color': '#fa0636 !important',
//         'border': '0.13rem solid #fa0636 !important',
//         'background-color': lavendar
//     });
//     $('label').css({
//         'color': cherry,
//         'background-color': 'transparent !important'
//     });
//     btn.css({
//         "background-color": cherry,
//         'color': blush
//     })
//     $('.intro').css('color', cherry);
//     $('.lightning').attr("src", "img/lightning-blue.svg");
//     $('.hands').attr("src", "img/hands-blue.svg");
//     $('.flower').attr("src", "img/flower-blue.svg");
//     $('.magicwand').attr("src", "img/magicwand-blue.svg");
//     $('.sidepanel').css({
//         'background-color': blush,
//         'borderRight': '0.13rem solid #fa0636',
//     });
//     $('.close-button').css('filter', cherryFilter);
//     $('.form-input').css({
//         'border': '0.13rem solid #fa0636'
//     });
//     btn.on('focus', function(){
//         btn.css({
//             'background-color': 'transparent',
//             'color': cherry,
//             'border': '0.13rem solid #fa0636'
//         })
//     });
//     btn.on('mousedown', function(event){
//         btn.css({
//             'background-color': 'transparent',
//             'color': cherry,
//             'border': '0.1rem solid #fa0636'
//         })
//     })
//     $('.err').css('color', cherry);
//     $('.success-p').css('color', cherry);
//     $(function (){
//         contrastButton.on('mouseover click tap', function(){
//             let $this = $(this);
//             let switchClass = $this.attr('class');
//             $(this).attr("src", "img/dothewave.gif");
//             $this.attr("class", switchClass.replace("contrast-img", "doTheWave"));
//             $('#contrast-img:focus').css('outline', lavendar);
//         })
//         contrastButton.on('mouseleave', function(){
//             let src = $(this).attr("src");
//             let switchClass = $(this).attr('class');
//             $(this).attr("src", "img/contrast.svg");
//             $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
//         })
//     })
// }


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
