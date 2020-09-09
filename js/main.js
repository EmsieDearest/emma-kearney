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

ElementCursor.setCursor($('#cursor'), $('.btn, .form-input, .logo, .nav-link, .closebtn'));
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




// Auto resizes the message input in the contact form

// Targets all textareas with class "message-input"
let textareas = document.querySelectorAll('.message-input'),
    hiddenDiv = document.createElement('div'),
    content = null;

// Adds a class to all textareas
for (let j of textareas) {
    j.classList.add('txtstuff');
}

// Build the hidden div's attributes

// The line below is needed if you move the style lines to CSS
// hiddenDiv.classList.add('hiddendiv');

// Add the "message-input" styles, which are common to both textarea and hiddendiv
// If you want, you can remove those from CSS and add them via JS
hiddenDiv.classList.add('message-input');

// Add the styles for the hidden div
// These can be in the CSS, just remove these three lines and uncomment the CSS
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

// Loop through all the textareas and add the event listener
for(let i of textareas) {
    (function(i) {
        // Note: Use 'keyup' instead of 'input'
        // if you want older IE support
        i.addEventListener('input', function() {

            // Append hiddendiv to parent of textarea, so the size is correct
            i.parentNode.appendChild(hiddenDiv);

            // Remove this if you want the user to be able to resize it in modern browsers
            i.style.resize = 'none';

            // This removes scrollbars
            i.style.overflow = 'hidden';

            // Every input/change, grab the content
            content = i.value;

            // Add the same content to the hidden div

            // This is for old IE
            content = content.replace(/\n/g, '<br>');

            // The <br ..> part is for old IE
            hiddenDiv.innerHTML = content + '<br style="line-height: 2rem;">';

            // Briefly make the hidden div block but invisible
            // This is in order to read the height
            hiddenDiv.style.visibility = 'hidden';
            hiddenDiv.style.display = 'block';
            i.style.minHeight = hiddenDiv.offsetHeight + '%';

            // Make the hidden div display:none again
            hiddenDiv.style.visibility = 'visible';
            hiddenDiv.style.display = 'none';
        });
    })(i);
};



// Contrast Button
let contrastButton = $('.contrast-img');
let contrastButtonId = $('#contrast-img');
let contrastButtonBlush = $('.contrast-blush');
let contrastButtonBlack = $('.contrast-black');
let doTheWave = $('.doTheWave');
let cherry = '#fa0636';
let blush = '#fff6f6';
let blushFilter = 'contrast(0) sepia(100%) hue-rotate(663deg) brightness(1.7) saturate(0.35)';

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

// Define Theme Parameters
const blackOnBlush = () => {
    $("body").css("backgroundColor", blush);
    $(".logo").css('filter', 'grayscale(100%) contrast(2000%)');
    $('p').css('color', 'black');
    $('::-webkit-resizer').css('color', 'black');
    $('.nav-link').css('color', 'black');
    $('input[type="text"], textarea[type="text"]').css('filter', 'grayscale(100%) contrast(2000%) !important');
    $('label').css('color', 'black');
    $('.btn').css("backgroundColor", 'black');
    $('.intro').css('color', 'black');
    $('.sidepanel').css({
        'backgroundColor': blush,
        'borderRight': '0.13rem solid black',
    });
    $('.closebtn').css('color', 'black');
    $('.form-input').css('border', '0.13rem solid black');
    $('input').css('filter', 'grayscale(100%) contrast(2000%)');
    $('textarea').css('filter', 'grayscale(100%) contrast(2000%)');
    $('.btn:focus').css({
        'backgroundColor': 'transparent',
        'color': 'black',
        'border': '0.13rem solid black'
    });
    $('.btn').on('mousedown', function(event){
        event.target.css({
            'backgroundColor': 'transparent',
            'color': 'black',
            'border': '0.13rem solid black'
        })
    })
    $('.err').css('color', 'black');
    $('.success-p').css('color', 'black');
    $(function (){
        contrastButton.on('mousedown', function(){
            let src = $(this).attr("src");
            let switchClass = $(this).attr('class');
            $(this).attr("src", src.replace("img/dothewave.gif", "img/dothewave_blk-on-blsh.gif"));
            $(this).attr("class", switchClass.replace("contrast-img", "doTheWave"));
        });
        contrastButton.on('mouseleave', function(){
            let src = $(this).attr("src");
            $(this).attr("src", src.replace("img/dothewave_blk-on-blsh.gif", "img/contrast-black.svg"));
        })
    })
}

const blushOnBlack = () => {
    $("body").css("backgroundColor", 'black');
    $(".logo").css('filter', blushFilter);
    $('p').css('color', blush);
    $('::-webkit-resizer').css('color', blush);
    $('.nav-link').css('color', blush);
    $('input[type="text"], textarea[type="text"]').css('filter', blushFilter);
    $('label').css('filter', blushFilter);
    $('.btn').css({
        "backgroundColor": 'black',
        'color': blush,
    });
    $('.intro').css('color', blush);
    $('#cursor:before, #cursor:after').css('filter', blushFilter);
    $('.sidepanel').css({
        'backgroundColor': 'black',
        'borderRight': '0.13rem solid #fff6f6',
    });
    $('.closebtn').css('color', blush);
    $('.form-input').css('border', '0.13rem solid #fff6f6');
    $('input').css('filter', blushFilter);
    $('textarea').css('filter', blushFilter);
    $('.btn:focus').css({
        'backgroundColor': 'black',
        'color': blush,
        'border': '0.13rem solid #fff6f6'
    });
    $('.err').css('color', blush);
    $('.success-p').css('color', blush);
}

const blushOnCherry = () => {
    $("body").css("backgroundColor", cherry);
    $(".logo").css('filter', blushFilter);
    $('p').css('color', blush);
    $('::-webkit-resizer').css('color', blush);
    $('.nav-link').css('color', blush);
    $('input[type="text"], textarea[type="text"]').css('filter', blushFilter);
    $('label').css('filter', blushFilter);
    $('.btn').css("backgroundColor", blushFilter);
    $('.intro').css('color', blush);
    $('.sidepanel').css({
        'backgroundColor': cherry,
        'borderRight': '0.13rem solid #fff6f6',
    });
    $('.closebtn').css('color', blush);
    $('.form-input').css('border', '0.13rem solid #fff6f6');
    $('input').css('filter', blushFilter);
    $('textarea').css('filter', blushFilter);
    $('.btn:focus').css({
        'backgroundColor': 'transparent',
        'color': blush,
        'border': '0.13rem solid #fff6f6'
    });
    $('.btn').on('mousedown', function(event){
        event.target.css({
            'backgroundColor': 'transparent',
            'color': blush,
            'border': '0.1rem solid #fff6f6'
        })
    })
    $('.err').css('color', blush);
    $('.success-p').css('color', blush);
}

const cherryOnBlush = () => {
    $("body").css("backgroundColor", blush);
    $(".logo").css('filter', blushFilter);
    $('p').css('color', cherry);
    $('::-webkit-resizer').css('color', cherry);
    $('.nav-link').css('color', blush);
    $('input[type="text"], textarea[type="text"]').css('filter', blushFilter);
    $('label').css('filter', blushFilter);
    $('.btn').css("backgroundColor", blushFilter);
    $('.intro').css('color', cherry);
    $('.sidepanel').css({
        'backgroundColor': blush,
        'borderRight': '0.13rem solid #fa0636',
    });
    $('.closebtn').css('color', cherry);
    $('.form-input').css('border', '0.13rem solid #fa0636');
    $('input').css('filter', blushFilter);
    $('textarea').css('filter', blushFilter);
    $('.btn:focus').css({
    'backgroundColor': 'transparent',
    'color': cherry,
    'border': '0.13rem solid #fa0636'
    });
    $('.btn').on('mousedown', function(event){
        event.target.css({
            'backgroundColor': 'transparent',
            'color': cherry,
            'border': '0.1rem solid #fa0636'
        })
    })
    $('.err').css('color', cherry);
    $('.success-p').css('color', cherry);
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
