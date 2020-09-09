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
        $(document).mousemove(function (e) {
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

ElementCursor.setCursor($('#cursor'), $('.btn, .form-input, .logo, .nav-link, .close-button, .contrast-img, .doTheWave'));
$(window).on('scroll', function(e) {});

// Side Panel

/* Set the width of the sidebar to 50% (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "50%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
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
let blush = '#fff6f6';
let blushFilter = 'contrast(0) sepia(100%) hue-rotate(663deg) brightness(1.7) saturate(0.35)';
let cherryFilter = 'invert(16%) sepia(93%) saturate(6576%) hue-rotate(343deg) brightness(97%) contrast(102%)';

// Place GIF on Hover
$(function() {
    contrastButton.on('mouseover',function(){
        let src = $(this).attr("src");
        let switchClass = $(this).attr('class');
        $(this).attr("src", src.replace("img/contrast.svg", "img/dothewave.gif"));
        $(this).attr("class", switchClass.replace("contrast-img", "doTheWave"));
    });
    contrastButton.on('mouseleave',function() {
        let src = $(this).attr("src");
        let switchClass = $(this).attr('class');
        $(this).attr("src", src.replace('img/dothewave.gif', "img/contrast.svg"));
        $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
    });
});

const logoFocus = () => {
    $('.logo').css('display', 'none');
}

// Define Theme Parameters
const blackOnBlush = () => {
    $("body").css("backgroundColor", blush);
    $('#skip').on('focus', function(){
        $('#skip').css('color', 'black');
    });
    $(".logo").css('filter', 'grayscale(100%) contrast(2000%)');
    $('p').css('color', 'black');
    $('::-webkit-resizer').css('color', 'black');
    $('.nav-link').css('color', 'black');
    $('input[type="text"], textarea[type="text"]').css('filter', 'grayscale(100%) contrast(2000%) !important');
    $('label').css('color', 'black');
    btn.css("backgroundColor", 'black');
    $('.intro').css('color', 'black');
    $('.sidepanel').css({
        'backgroundColor': blush,
        'borderRight': '0.13rem solid black',
    });
    $('.close-button').css('filter', 'grayscale(100%) contrast(2000%)');
    $('.form-input').css('border', '0.13rem solid black');
    $('input').css('filter', 'grayscale(100%) contrast(2000%)');
    $('textarea').css('filter', 'grayscale(100%) contrast(2000%)');
    $('.btn:focus').css({
        'backgroundColor': 'transparent',
        'color': 'black',
        'border': '0.13rem solid black'
    });
    btn.on('mousedown', function(event){
        event.target.css({
            'backgroundColor': 'transparent',
            'color': 'black',
            'border': '0.13rem solid black'
        })
    })
    $('.err').css('color', 'black');
    $('.success-p').css('color', 'black');
    $(function (){
        contrastButton.on('mouseover', function(){
            let $this = $(this);
            let switchClass = $this.attr('class');
            $(this).attr("src", "img/dothewave_blk-on-blsh.gif");
            $this.attr("class", switchClass.replace("contrast-img", "doTheWave"));
        })
        contrastButton.on('mouseleave', function(){
            let src = $(this).attr("src");
            let switchClass = $(this).attr('class');
            $(this).attr("src", src.replace("img/dothewave_blk-on-blsh.gif", "img/contrast-black.svg"));
            $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
        })
    })
}

const blushOnBlack = () => {
    $("body").css("backgroundColor", 'black');
    $('#skip').on('focus', function(){
        $('#skip').css('color', blush);
    });
    $(".logo").css('filter', blushFilter);
    $('p').css('color', blush);
    $('::-webkit-resizer').css('color', blush);
    $('.nav-link').css('color', blush);
    $('input[type="text"], textarea[type="text"]').css('filter', blushFilter);
    $('label').css('filter', blushFilter);
    btn.css({
        "backgroundColor": blush,
        'color': 'black',
    });
    $('.intro').css('color', blush);
    $('#cursor:before, #cursor:after').css('filter', blushFilter);
    $('.sidepanel').css({
        'backgroundColor': 'black',
        'borderRight': '0.13rem solid #fff6f6',
    });
    $('.close-button').css('filter', blushFilter);
    $('.form-input').css('border', '0.13rem solid #fff6f6');
    $('input').css('filter', blushFilter);
    $('textarea').css('filter', blushFilter);
    btn.on('focus', function(){
        $('.btn').css({
            'backgroundColor': 'black',
            'color': blush,
            'border': '0.13rem solid #fff6f6'
        })
    })
    $('.err').css('color', blush);
    $('.success-p').css('color', blush);
    $(function (){
        contrastButton.on('mouseover', function(){
            let $this = $(this);
            let switchClass = $this.attr('class');
            $(this).attr("src", "img/dothewave_blsh-on-blk.gif");
            $this.attr("class", switchClass.replace("contrast-img", "doTheWave"));
        })
        contrastButton.on('mouseleave', function(){
            let src = $(this).attr("src");
            let switchClass = $(this).attr('class');
            $(this).attr("src", src.replace("img/dothewave_blsh-on-blk.gif", "img/contrast-blush.svg"));
            $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
        })
    })
}

const blushOnCherry = () => {
    $("body").css("backgroundColor", cherry);
    $('#skip').on('focus', function(){
        $('#skip').css('color', blush);
    });
    $(".logo").css('filter', blushFilter);
    $('p').css('color', blush);
    $('::-webkit-resizer').css('color', blush);
    $('.nav-link').css('color', blush);
    $('input[type="text"], textarea[type="text"]').css('filter', blushFilter);
    $('label').css('filter', blushFilter);
    btn.css({
        "backgroundColor": blush,
        'color': cherry
    });
    $('.intro').css('color', blush);
    $('.sidepanel').css({
        'backgroundColor': cherry,
        'borderRight': '0.13rem solid #fff6f6',
    });
    $('.close-button').css('filter', blushFilter);
    $('.form-input').css('border', '0.13rem solid #fff6f6');
    $('input').css('filter', blushFilter);
    $('textarea').css('filter', blushFilter);
    btn.on('focus', function() {
        btn.css({
            'backgroundColor': cherry,
            'color': blush,
            'border': '0.14em solid #fff6f6'
        });
    });
    btn.on('mousedown', function(event){
        event.target.css({
            'backgroundColor': cherry,
            'color': blush,
            'border': '0.08em solid #fff6f6'
        })
    })
    $('.err').css('color', blush);
    $('.success-p').css('color', blush);
    $(function (){
        contrastButton.on('mouseover', function(){
            let $this = $(this);
            let switchClass = $this.attr('class');
            $(this).attr("src", "img/dothewave_blsh-on-blk.gif");
            $this.attr("class", switchClass.replace("contrast-img", "doTheWave"));
        })
        contrastButton.on('mouseleave', function(){
            let src = $(this).attr("src");
            let switchClass = $(this).attr('class');
            $(this).attr("src", src.replace("img/dothewave_blsh-on-blk.gif", "img/contrast-blush.svg"));
            $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
        })
    })
}

const cherryOnBlush = () => {
    $("body").css("backgroundColor", blush);
    $('#skip').on('focus', function(){
        $('#skip').css('color', cherry);
    });
    $(".logo").css('filter', cherryFilter);
    $('p').css('color', cherry);
    $('::-webkit-resizer').css('color', cherry);
    $('.nav-link').css('color', cherry);
    $('input[type="text"], textarea[type="text"]').css('color', cherry);
    $('label').css('filter', cherryFilter);
    btn.css({
        "backgroundColor": cherry,
        'color': blush
    })
    $('.intro').css('color', cherry);
    $('.sidepanel').css({
        'backgroundColor': blush,
        'borderRight': '0.13rem solid #fa0636',
    });
    $('.close-button').css('filter', cherryFilter);
    $('.form-input').css('border', '0.13rem solid #fa0636');
    $('input').css('filter', cherryFilter);
    $('textarea').css('filter', cherryFilter);
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
        contrastButton.on('mouseover', function(){
            let $this = $(this);
            let switchClass = $this.attr('class');
            $(this).attr("src", "img/dothewave.gif");
            $this.attr("class", switchClass.replace("contrast-img", "doTheWave"));
        })
        contrastButton.on('mouseleave', function(){
            let src = $(this).attr("src");
            let switchClass = $(this).attr('class');
            $(this).attr("src", src.replace("img/dothewave.gif", "img/contrast-img.svg"));
            $(this).attr("class", switchClass.replace("doTheWave", "contrast-img"));
        })
    })
}


// Theme Picker Function
$(function(){
    const theme = [1, 2, 3, 4];
    let i = 0;
    contrastButtonId.on('mousedown', function(){
        i = (i++) % theme.length;
        switch (theme[i]) {
            case i = 1:
                return blackOnBlush();
                break;
            case i = 2:
                return blushOnBlack();
                break;
            case i = 3:
                return blushOnCherry();
                break;
            case i = 4:
                return cherryOnBlush();
                break;
        }
        return theme[i];
    });
});
